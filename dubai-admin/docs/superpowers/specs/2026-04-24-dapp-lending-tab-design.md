# DApp 顶部导航新增 Lending Tab 设计说明

## 背景

当前 DApp 顶部导航已经包含 `DeFi / Fun / NFT / My`，但项目中仍存在一个完整的 Lending 页面：

- `src/views/LendingPage.tsx`
- `src/features/lending/components/LendingSummarySection.tsx`
- `src/features/lending/components/LendingAssetTableSection.tsx`
- `src/features/lending/components/LendingMobilePage.tsx`

该页面目前仍以旧独立路由 `/lending` 存在，没有纳入新的 `/dapp/...` 固定导航结构。

## 目标

- 在 DApp 顶部导航中新增 `Lending` tab。
- 新增 DApp 子路由 `/dapp/lending`。
- 点击 `Lending` 后，顶部 DApp 导航保持不变，下方内容显示现有 Lending 页面主体。
- 旧 `/lending` 路由兼容重定向到 `/dapp/lending`。
- 移动端 DApp 导航同步增加 `Lending`。

## 范围

本次预计涉及：

- `DappChrome`：新增 `Lending` 导航项。
- `DappPage`：新增 `lending` section 配置，并复用 Lending 现有主体组件。
- `MobilePageShell`：移动端导航新增 `Lending`。
- `LendingMobilePage`：active path 改为 `/dapp/lending`。
- 路由配置：旧 `/lending` 改为重定向到 `/dapp/lending`。

## 不在范围

- 不重做 Lending 页面视觉。
- 不新增 Lending 业务逻辑。
- 不改变 `DeFi / Fun / NFT / My` 的已有行为。
- 不处理 `Register` 页面进入 DApp 导航，`Register` 仍作为独立入口保留。

## 实现方案

推荐方案：

- 在 `DappPage` 中将 `lending` 加入 `DappSection`。
- 使用现有 `LendingSummarySection` 和 `LendingAssetTableSection` 作为内容。
- 复用 Lending 页面原有 `lending-page.scss`。
- 不渲染旧 `LendingChrome`，避免出现两套顶部导航。
- 对旧 `LendingChrome` 中属于内容背景的卡片边框做最小保留，保证 Lending 主体视觉不缺块。

## 验收标准

- DApp 顶部导航显示 `DeFi / Lending / Fun / NFT / My`。
- 访问 `/dapp/lending` 时，`Lending` 为 active。
- `/dapp/lending` 显示现有 Lending 页面主体内容。
- 访问 `/lending` 时自动进入 `/dapp/lending`。
- 移动端 DApp 导航也显示 `Lending`。
- `npm run build` 与 `npm run lint` 通过。

## 关键假设

- 本次新增 tab 使用页面名 `Lending`。
- `RegisterPage` 不是本次要加入顶部导航的页面，仍保持独立入口。
