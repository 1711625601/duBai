# dubai-admin 未使用文件清理设计

## 目标

- 清理 `dubai-admin` 项目中静态确认未使用的源码、组件、图片资源和包管理器冗余文件。
- 将 `dubai-admin` 统一为 `pnpm` 项目，避免同时维护 `package-lock.json` 与 `pnpm-lock.yaml`。
- 保持当前业务页面、路由和视觉表现不变，只做结构清理与可验证的无用文件移除。

## 范围

- 仅允许修改 `dubai-admin/` 目录下的文件。
- 不修改根目录下的截图文件。
- 不修改 `app-art-replicator/`。
- 不修改 `gemchain（切图）/`。
- 不清理 `dubai-admin/docs/superpowers/specs/` 中已有历史规格文档。

## 当前发现

- `dubai-admin` 当前入口为 `src/main.tsx`，经 `App`、`router` 进入 `/`、`/dapp/*`、`/register`。
- `/defi`、`/fun`、`/lending`、`/profile` 已作为 legacy route 重定向到 `/dapp/*`，旧独立页面视图不再被路由引用。
- 静态引用扫描显示以下旧页面和旧 `Chrome` 组件不在入口依赖图内：
  - `src/views/DefiPage.tsx`
  - `src/views/FunPage.tsx`
  - `src/views/LendingPage.tsx`
  - `src/views/ProfilePage.tsx`
  - `src/features/defi/components/DefiChrome.tsx`
  - `src/features/fun/components/FunChrome.tsx`
  - `src/features/lending/components/LendingChrome.tsx`
  - `src/features/profile/components/ProfileChrome.tsx`
- 静态资源扫描显示部分图片没有被 TypeScript `import` 或 SCSS `url()` 引用，其中 `unused-*` 命名资源可作为明确清理候选。
- 项目同时存在 `package-lock.json` 和 `pnpm-lock.yaml`，用户已确认 `dubai-admin` 使用 `pnpm`。

## 清理策略

### 推荐方案：保守清理

- 删除入口依赖图不可达、且全文搜索仅被互相引用的旧页面/旧组件。
- 删除明确命名为 `unused-*` 且无引用的图片资源。
- 对无引用但名称不像废弃物的图片资源，先二次核对；只有确认不是设计备用图或未来引用入口后才删除。
- 删除 `package-lock.json`，保留 `pnpm-lock.yaml`。
- 保留 `dist/`、`node_modules/`、`.DS_Store` 等未跟踪或已被 `.gitignore` 忽略的本地文件不作为本次版本变更重点；如工作区存在这些文件，只在必要时建议用户本地清理。

### 备选方案

- 激进清理：删除所有静态扫描无引用资源。优点是目录最干净；风险是误删尚未接入但准备保留的设计资产。
- 只清理包管理器：仅删除 `package-lock.json`。风险最低，但无法解决旧页面和废弃资源造成的结构混乱。

本次采用保守清理，避免影响页面表现。

## 实施步骤

1. 使用 `rg` 和入口依赖扫描再次确认候选文件没有被当前路由、组件、样式或资源引用。
2. 删除旧独立页面视图和旧 `Chrome` 组件。
3. 删除无引用且明确废弃命名的图片资源。
4. 删除 `package-lock.json`，保留 `pnpm-lock.yaml`。
5. 使用 `pnpm lint` 和 `pnpm build` 验证项目。
6. 若验证失败，只针对清理造成的问题修复引用，不做额外功能改动。

## 验收标准

- 修改范围只包含 `dubai-admin/`。
- `app-art-replicator/` 和 `gemchain（切图）/` 无任何变更。
- `dubai-admin` 中不再保留已确认废弃的旧独立页面、旧 `Chrome` 组件和 `unused-*` 图片。
- `dubai-admin/package-lock.json` 被删除，`pnpm-lock.yaml` 保留。
- `pnpm lint` 通过。
- `pnpm build` 通过。
- `/`、`/dapp/defi`、`/dapp/lending`、`/dapp/fun`、`/dapp/nft`、`/dapp/my`、`/register` 的路由结构不变。

## 风险与控制

- 资源误删风险：只删除静态无引用且命名明确为废弃的资源；其它无引用资源在实现时再次确认。
- 路由回归风险：保留 legacy redirect，不删除 `routes.ts` 中的跳转逻辑。
- 包管理器风险：统一到 `pnpm` 后，以 `pnpm lint` 和 `pnpm build` 为验证命令。
- 误碰其它项目风险：所有命令和文件操作都限定在 `dubai-admin/` 下。
