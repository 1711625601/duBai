# DApp Lending 移动端参考样式迁移规格

## 背景

`dubai-admin` 当前 `/dapp/lending` 移动端仍使用通用 `MobilePageShell`，视觉和参考项目 `app-art-replicator/src/routes/lend.tsx` 差异较大。用户要求按参考项目 `lend` 页面还原 Lending 移动端内容，但顶部导航继续使用刚在 DeFi 移动端调整好的 DApp 移动端导航；web 端不修改。

## 目标

- `/dapp/lending` 移动端内容对齐参考项目 `lend` 页面；
- 顶部使用统一 DApp 移动端导航，tab 为 `DeFi / Lending / Fun / NFT / My`；
- Lending 页面中 `Lending` tab 为 active；
- 手机和 pad 宽度下 tab 均居中并合理拉开，不横向滚动；
- web 端 `/dapp/lending` 不受影响。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/dapp/components/DappMobileChrome.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/dapp-mobile-chrome.scss`
- `/Users/lei/Codehub/duBai/dubai-admin/src/features/defi/components/DefiMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/features/lending/components/LendingMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/lending-page-mobile.scss`

不修改：

- web 端 `DappChrome`；
- web 端 Lending 组件；
- 路由结构；
- Fun/NFT/My 的移动端页面。

## 参考内容结构

Lending 移动端主体包含：

- `Core Instance` 实例头部；
- `V3` 标签和 Favourite 按钮；
- 描述文案；
- `Total market size / Total available / Total borrows` 三个 summary；
- `CORE ASSETS` 标题；
- All Categories 筛选和搜索输入；
- `Save with sGHO` 高亮卡片；
- asset 表头和 asset 行列表；
- footer 居中 logo。
- 实例标题区避免 `Core Instance` 与 `Favourite` 挤压；
- asset 表头和列表字号比例协调，列表略收紧；
- `Borrow APY` 表头保持单行；
- 删除 `Show Frozen or paused assets` toggle 整行，避免移动端底部出现无意义控件。
- `Save with sGHO` 卡片左侧图标使用 web 端同款图标，`4.82%` 的数字和百分号都保持蓝色。

## 验收标准

1. `/dapp/lending` 移动端视觉接近参考项目 `lend`；
2. 顶部导航和 `/dapp/defi` 移动端一致；
3. `/dapp/lending` 中 `Lending` tab active；
4. 390px、700px、767px 移动端宽度下 tab 不横向滚动且居中分布；
5. 390px 移动端下实例标题区不互相压住；
6. asset 表头 `Borrow APY` 不换行，列表字号更紧凑；
7. `Show Frozen or paused assets` toggle 整行不再渲染；
8. sGHO 卡片左侧图标和 web 端一致，`4.82%` 整体为蓝色；
9. web 端 `/dapp/lending` 不渲染移动端页面；
10. `npm run build` 和 `npm run lint` 通过；
11. 浏览器控制台无新增 warning/error。
