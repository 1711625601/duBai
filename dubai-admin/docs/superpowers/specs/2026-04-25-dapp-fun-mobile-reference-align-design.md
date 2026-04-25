# DApp Fun 移动端参考样式迁移规格

## 背景

`dubai-admin` 当前 `/dapp/fun` 移动端仍使用通用 `MobilePageShell`，视觉和参考项目 `app-art-replicator/src/routes/fun.tsx` 差异较大。用户要求按前面 DeFi、Lending 的方式迁移 Fun 移动端：只还原移动端，不影响 web 端，并继续使用已经统一好的 DApp 移动端顶部导航。

## 目标

- `/dapp/fun` 移动端视觉结构对齐参考项目 Fun 页面；
- 顶部使用统一 `DappMobileChrome`，tab 为 `DeFi / Lending / Fun / NFT / My`；
- Fun 页面中 `Fun` tab 为 active；
- 使用 `dubai-admin` 现有 Fun 图片、copy 图标、完成状态图标和品牌资源；
- 手机和 pad 宽度下自适应，不引入参考项目的固定手机壳宽度；
- web 端 Fun 页面保持不变。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/fun/components/FunMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/fun-page-mobile.scss`

不修改：

- web 端 `FunChrome`；
- web 端 `FunReferralSection`；
- web 端 `FunCommunitySections`；
- 路由结构；
- DeFi/Lending/NFT/My 页面。

## 参考内容结构

Fun 移动端主体包含：

- `REFERRAL PROGRAM` 头部和说明文案；
- `Your Referral Link` 分享卡片，包含 link、code、copy icon 和 Copy Link 按钮；
- `Your Referrals` stats 卡片；
- `How It Works` guide 卡片；
- `Referral History` 卡片；
- `CAMPAIGNS` 列表；
- `REQUIREMENTS AND TASKS` 任务表；
- `RANKINGS` 排行表；
- footer 居中品牌。
- `go` 按钮箭头保持黑色；
- `Completed` 状态图标使用蓝色线框勾选图标；
- DApp 导航移动端和 web 端补齐所有 tab 图标，移动端 active 状态下图标和文字同色。

## 验收标准

1. `/dapp/fun` 移动端视觉接近参考项目 Fun 页面；
2. 顶部导航和 `/dapp/defi`、`/dapp/lending` 移动端一致；
3. `/dapp/fun` 中 `Fun` tab active；
4. 390px、700px、767px 移动端宽度下 tab 不横向滚动且居中分布；
5. referral、campaign、task、ranking 模块文字不挤压、不重叠；
6. 使用 `dubai-admin` 自有图片和图标资源；
7. `go` 箭头为黑色，`Completed` 图标为蓝色线框；
8. DApp 导航移动端和 web 端所有 tab 都有图标；
9. web 端 `/dapp/fun` 不渲染移动端页面；
10. `npm run build` 和 `npm run lint` 通过；
11. 浏览器控制台无新增 warning/error。
