# DApp DeFi 移动端细节调整规格

## 背景

DeFi 移动端已按参考项目完成整体样式迁移。用户继续要求修正若干细节：顶部菜单、tab active 颜色、chain icon、swap token icon、BNBY 文案和 logo 来源。

## 目标

- 去掉顶部右侧汉堡菜单和下拉菜单；
- 保留下方 tab 导航，并将 active 颜色对齐参考项目的 cyan；
- `defi-mobile__chain-icons` 改用 web 端 DeFi 已有的 chain icon 资产/形状；
- swap 卡片中的 ETH/BNB 左侧图标改用 web 端已有真实 token icon；
- 调整中间 swap 按钮与上方 ETH 区域的压叠关系；
- 移动端 `BNBY` 改为 `BNB`；
- web 端只修改 DeFi swap 中的 `BNBY -> BNB` 文案；
- 移动端左侧 logo 改用 web DeFi logo。
- 中间 swap 按钮继续下移，避免视觉上偏上；
- swap 外层卡片圆角对齐 web 端 `20px`，token panel 圆角对齐 web 端 `10px`；
- footer 去掉 `Home` 链接，logo 居中。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/defi/components/DefiMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/defi-page-mobile.scss`
- `/Users/lei/Codehub/duBai/dubai-admin/src/features/defi/components/DefiSwapSection.tsx`

不会修改：

- web 端除 `BNBY -> BNB` 外的其它内容；
- `MobilePageShell`；
- DApp 其它页面；
- 注册页里仍然存在的 `BNBY` 文案。

## 验收标准

1. 移动端顶部不再显示汉堡按钮和顶部下拉菜单；
2. 下方 tab active 视觉颜色与参考项目一致；
3. chain icon 使用 web 端真实图形，不再是字母占位块；
4. swap 卡片内 ETH 和 BNB 使用真实 token icon；
5. 中间 swap 按钮不再明显压住上方 ETH 区域；
6. 移动端和 web 端 DeFi swap 文案均显示 `BNB`；
7. footer 只显示居中的 logo；
8. `npm run build` 和 `npm run lint` 通过。
