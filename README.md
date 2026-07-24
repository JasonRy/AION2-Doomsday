# AION2 Character Console

AION2 角色查询与属性分析工具。项目当前同时保留微信小程序目录与网页端实现，主要开发重心在 `web/`。

网页端提供可实际查询的角色详情、装备、阿尔卡纳、技能、称号、翅膀、衣柜、属性分析与战斗面板。前端不直接请求 NCSoft API，而是通过本地 Node 代理统一转发，便于处理 CORS、缓存与字段兼容。

## 功能概览

- 角色搜索与查询历史、收藏角色。
- 角色详情：基础资料、称号、守护力、排名、装备、阿尔卡纳、技能。
- 装备展示：列表模式与图标模式，桌面端和手机端使用不同信息密度。
- 属性分析：按主要能力值、百分比增加、基础战斗、基础战斗增幅、PVE/PVP 相关增幅、异常状态、其他手段分模块展示。
- 战斗面板：PVE/PVP 切换，汇总属性分析后的战斗向数值，并支持宠物、翅膀、称号、衣柜模拟开关。
- 数据模拟：包含翅膀、宠物理解度、衣柜、称号；模拟项开启后参与属性分析和综合评级，关闭后自动移除。
- 宠物理解度：本地模板保存，支持 3 个模板位、盘面词条编辑、条数上限限制与模板重置。
- 翅膀模拟：使用本地翅膀数据表，图标统一使用官方 CDN；可选择拥有的翅膀和强化等级。
- 称号模拟：使用本地称号数据表，支持攻擊/防禦/其他/特殊分类、天魔筛选、模糊搜索和阵营互斥选择。
- 衣柜模拟：按武器、防具、饰品分区设置收集度；只按基础能力值参与百分比加成计算。
- 查询记录：查询日志、角色名称快照和角色快照支持数据库落库，便于后续统计和改名记录。
- 深色/浅色主题切换。

## 目录结构

```text
.
├─ web/                 # 网页端主应用
│  ├─ public/           # 静态页面、前端脚本、样式和本地数据表
│  ├─ prisma/           # 数据库模型与迁移：宠物模板、查询日志、角色快照等
│  ├─ server.js         # Node 代理与静态服务
│  └─ README.md         # 网页端详细运行说明
├─ miniprogram/         # 微信小程序代码
├─ cloudfunctions/      # 微信云函数
├─ 开发日志.md          # 开发记录和规则说明
├─ fly.toml             # Fly.io 配置，当前线上主流程不一定使用
└─ package.json         # 根目录启动入口
```

## 本地启动

推荐在项目根目录执行：

```powershell
cd D:\project\aion2
npm start
```

默认访问地址：

```text
http://localhost:8080
```

如果需要宠物模板数据库：

```powershell
cd D:\project\aion2\web
docker compose up -d postgres
npm install
npm run db:migrate
cd D:\project\aion2
npm start
```

本地 `.env` 不提交，参考 `web/.env.example`。

## 数据规则

- 角色、装备、技能、守护力等数据优先使用 NCSoft 官方接口返回。
- 官方暂缺或不稳定的数据使用 `web/public/data/` 下的 JSON 表临时补充，例如翅膀、称号等模拟数据表。
- 公开静态数据表不暴露外部采集来源；图标资源统一指向官方 CDN 或官方资源路径。
- 属性来源需要保留来源层级，便于展开查看：装备类型、强化/突破等级、装备名，以及基础能力值、灵魂刻印、魔石/灵石、套装、技能、守护力等子项。
- `攻击力` 严格只统计攻击力字段；PVE 攻击力、首领攻击力等专项属性单独进入对应模块。
- `最大攻击力` 按 50% 折算进攻击力，这是本站特色算法，用于接近平均攻击力口径，不等同于官方原始字段。
- 之前设过上限的百分比属性已解锁；宠物盘每条词条的最大值和最多条数仍按模拟器配置限制。
- 称号模拟只套用持有效果；装备效果只用于展示，避免与角色实际装备中的称号效果重复计算。
- 翅膀模拟只套用选择拥有的翅膀与强化等级数据；角色实际装备翅膀仍按官方角色详情中的装备数据计算。
- 衣柜模拟只计算装备基础能力值，强化、突破、刻印、魔石、套装不参与衣柜百分比基数。

## 分支与发布

- 日常开发分支：`dev/20260519`
- 在线发布分支：`release`
- 阿里云线上目录：`/opt/aion2`
- 线上服务：Node + PM2，默认监听 `8080`，由 Nginx 反向代理到域名。

常规发布流程：

```powershell
git checkout dev/20260519
git status
git add <files>
git commit -m "<message>"
git push
git checkout release
git merge dev/20260519 --no-edit
git push origin release
git checkout dev/20260519
```

当前约定是推送 `release` 分支触发 Git 上的在线发布流程。

阿里云手动发布流程：

```powershell
cd D:\project\aion2
git archive --format=tar --output="$env:TEMP\aion2-release.tar" release
scp "$env:TEMP\aion2-release.tar" root@<server-ip>:/tmp/aion2-release.tar
ssh root@<server-ip>
```

```bash
cd /opt
mkdir -p /opt/aion2
tar -xf /tmp/aion2-release.tar -C /opt/aion2
cd /opt/aion2/web
npm install
npx prisma generate
npx prisma migrate deploy
cd /opt/aion2
pm2 restart aion2 || pm2 start "npm start" --name aion2
pm2 save
```

线上 `.env` 不随代码包覆盖；服务器上需要保留 `web/.env`，至少包含 `DATABASE_URL`。

## 维护提示

- 修改字段匹配、折算口径、特殊数据表时，同步更新 `开发日志.md` 中的规则说明。
- 涉及用户隐私的角色验证数据不要写入开发日志或 README。
- 修改前端后至少执行：

```powershell
node --check D:\project\aion2\web\public\app.js
node --check D:\project\aion2\web\server.js
```
