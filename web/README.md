# AION2 Web MVP

网页化角色查询控制台，当前包含：

- 角色查询与搜索结果
- 角色详情、装备/卡牌/技能展示
- 属性分析与右侧战斗面板
- PVE/PVP 快照缓存
- 宠物盘模拟与模板保存
- 深色/浅色主题切换

## 启动

```bash
npm start
```

默认地址：

```text
http://localhost:8080
```

## 本地数据库

宠物模板已经接入本地 PostgreSQL，开发阶段使用固定 `DEV_USER_UUID` 模拟登录用户。

第一次启动数据库：

```bash
docker compose up -d postgres
npm install
npm run db:migrate
```

之后日常启动：

```bash
docker compose up -d postgres
npm start
```

环境变量参考 `.env.example`，本地 `.env` 不提交。

当前模板 API：

```text
GET /api/pet-templates
PUT /api/pet-templates
```

## 说明

浏览器不直接请求 NCSoft API，而是走本地 Node 代理：

```text
浏览器 -> /api/* -> server.js -> tw.ncsoft.com
```

注意：代理请求不要带 `Origin` 头，否则 NCSoft API 会返回 `403`。当前本地代理已去掉该请求头，搜索、详情、装备和攻击力分析可以实际查询。

## 当前界面规则

- 装备页支持列表模式与图标模式。
- 图标模式在桌面端显示技能/卡牌文字摘要，在手机端只显示 icon，详情通过 hover/focus/tap 弹出。
- 属性分析按主要能力值、百分比增加、基础战斗、PVE/PVP 专项等分桶展示。
- 战斗面板展示综合值，数据来自属性分析结果汇总，不直接从装备重新硬算。
- 宠物模拟开启后参与当前展示计算；关闭后自动移除宠物数值。
