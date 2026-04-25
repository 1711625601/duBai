# DApp NFT 移动端占位页设计

## 目标

- 将 `/dapp/nft` 移动端页面改成与当前 DApp 移动端页面一致的结构和视觉风格。
- 页面当前不实现 NFT 业务功能，以“暂未开放”占位状态呈现。
- web 端 NFT 占位页不在本次修改范围内。

## 范围

- 替换 `DappNftMobilePage` 中的旧 `MobilePageShell` 结构。
- 复用统一的 `DappMobileChrome`，保持 `DeFi / Lending / Fun / NFT / My` 导航数量、名称、图标和跳转一致。
- 新增移动端专用 SCSS，避免影响 web 端和其他 DApp 页面。

## 视觉与交互

- 使用当前 DApp 移动端的暗色背景、青色高亮、网格氛围、8px 卡片圆角和 `Orbitron` / `Rajdhani` 字体体系。
- 主内容展示 NFT 图标、`NFT` 标识、`暂未开放` 标题和简短说明。
- 底部保留居中的 GEM 品牌 footer。
- 移动端宽度不使用参考项目的固定容器限制，保持 320px 到 767px 内自适应居中、无横向滚动。

## 验收标准

- `/dapp/nft` 移动端显示统一 DApp 顶部和 tab 导航，`NFT` 为选中态。
- 移动端不再渲染旧的 `mobile-shell` 结构。
- 320px、390px、700px、767px 视口下无横向溢出。
- `npm run build` 和 `npm run lint` 通过。
