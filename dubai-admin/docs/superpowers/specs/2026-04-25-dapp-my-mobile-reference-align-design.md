# DApp My 移动端参考样式迁移规格

## 背景

`dubai-admin` 当前 `/dapp/my` 移动端仍使用通用 `MobilePageShell`，视觉与参考项目 `app-art-replicator/src/routes/profile.tsx` 差异较大。用户要求按 DeFi、Lending、Fun 的同一方式迁移 My 移动端：只还原移动端，不影响 web 端，并继续使用统一 DApp 移动端顶部导航。

## 目标

- `/dapp/my` 移动端视觉结构对齐参考项目 Profile 页面；
- 顶部使用统一 `DappMobileChrome`，tab 为 `DeFi / Lending / Fun / NFT / My`；
- My 页面中 `My` tab 为 active；
- 使用 `dubai-admin` 现有 Profile 图片、copy 图标和品牌资源；
- 手机和 pad 宽度下自适应，不引入参考项目的固定手机壳宽度；
- web 端 My/Profile 页面保持不变。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/profile/components/ProfileMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/profile-page-mobile.scss`

不修改：

- web 端 `ProfileChrome`；
- web 端 `ProfileAccountSections`；
- web 端 `ProfileWalletSection`；
- 路由结构；
- DeFi/Lending/Fun/NFT 页面。

## 参考内容结构

My 移动端主体包含：

- welcome/account card；
- avatar、账号、Member ID 和 copy 按钮；
- `log out` 按钮；
- `Usdt` balance card；
- `Deposit / Withdraw` 操作按钮；
- `Account Information` 列表；
- `Revise` 操作按钮；
- footer 居中品牌。

## 验收标准

1. `/dapp/my` 移动端视觉接近参考项目 Profile 页面；
2. 顶部导航和其它 DApp 移动端页面一致；
3. `/dapp/my` 中 `My` tab active；
4. 320px、390px、700px、767px 移动端宽度下 tab 不横向滚动且居中分布；
5. account、balance、information 模块文字不挤压、不重叠；
6. 使用 `dubai-admin` 自有图片和图标资源；
7. web 端 `/dapp/my` 不渲染移动端页面；
8. `npm run build` 和 `npm run lint` 通过；
9. 浏览器控制台无新增 warning/error。
