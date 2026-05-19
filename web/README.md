# AION2 Web MVP

第一版网页化原型，当前只包含：

- 角色查询与搜索结果
- 角色详情、装备列表
- 攻击力分析
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
