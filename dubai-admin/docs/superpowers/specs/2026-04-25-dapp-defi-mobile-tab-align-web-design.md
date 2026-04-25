# DApp DeFi 移动端 Tab 对齐 Web 规格

## 背景

DeFi 移动端当前 tab 来自参考项目，数量、名称和跳转路径与 `dubai-admin` web 端 `DappChrome` 不一致。用户要求移动端 tab 与 web 端 tab 对齐。

## 目标

- 移动端 tab 数量对齐 web 端；
- 移动端 tab 名称对齐 web 端；
- 移动端 tab 点击跳转路径对齐 web 端；
- 保持当前 DeFi 移动端视觉风格；
- 移动端所有宽度下 tab 都居中并合理拉开间距，不使用横向滚动；
- 窄屏时通过缩小字号、间距、padding 适配 5 个 tab；
- 不修改 web 端。

## 对齐结果

移动端 tab 调整为：

- `DeFi` -> `/dapp/defi`
- `Lending` -> `/dapp/lending`
- `Fun` -> `/dapp/fun`
- `NFT` -> `/dapp/nft`
- `My` -> `/dapp/my`

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/defi/components/DefiMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/defi-page-mobile.scss`

不修改：

- web 端 `DappChrome`；
- 其它 dapp 页面；
- 路由定义。

## 验收标准

1. DeFi 移动端 tab 显示 `DeFi / Lending / Fun / NFT / My`；
2. 每个 tab 点击路径与 web 端一致；
3. 当前页面 `DeFi` 保持 active；
4. 390px 移动端下 5 个 tab 全部可见，不需要横向滚动；
5. pad 宽度下 tab 不贴左边，整体居中并合理拉开；
6. `npm run build` 和 `npm run lint` 通过。
