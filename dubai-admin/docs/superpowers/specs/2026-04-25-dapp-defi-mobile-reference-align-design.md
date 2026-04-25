# DApp DeFi 移动端参考样式迁移规格

## 背景

`dubai-admin` 的 `/dapp/defi` 当前已经有移动端适配，但视觉效果与参考项目 `app-art-replicator` 中已完成的 DeFi 移动端页面差距较大。用户要求把参考项目里的移动端样式按之前首页移动端的方式迁移过来，同时不能影响 web 端。

参考项目的 DeFi 移动端由 `app-art-replicator/src/routes/defi.tsx` 实现，外层使用 `MobileFrame`。其中 `MobileFrame` 带有 `max-w-[420px]` 的预览宽度限制；用户明确要求不要把这个宽度限制迁移到 `dubai-admin`，只迁移移动端视觉样式。

## 目标

- 将 `dubai-admin` 的 DeFi 移动端页面改为参考项目的移动端视觉；
- 保持 DeFi 移动端自然占满当前移动视口，不增加参考项目的最大宽度限制；
- 保持 web/桌面端 DeFi 页面不变；
- 不影响其它 dapp 移动端页面，如 Lending、Fun、NFT、My。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/defi/components/DefiMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/defi-page-mobile.scss`

不会修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/components/mobile/MobilePageShell.tsx`
- web 端 DeFi 组件和样式；
- DApp 其它移动端页面；
- 路由结构。

## 推荐方案

采用 DeFi 专属移动端实现：

- `DefiMobilePage.tsx` 不再复用 `MobilePageShell`，避免修改通用 shell 后影响其它移动页；
- 在 `DefiMobilePage.tsx` 内按参考项目建立 header、tab nav、hero、swap card、partners、protocol stats、notice、footer 结构；
- 由于 `dubai-admin` 没有 `lucide-react` 依赖，参考项目中的 icon 用本地轻量 SVG 组件还原；
- `defi-page-mobile.scss` 使用 `.defi-mobile` 作用域承载所有样式，避免污染 web 端；
- 复用项目已有字体 `Orbitron`、`Rajdhani`，并按参考项目的 cyan/glass/grid 视觉体系设置字体、粗细、间距、颜色和卡片效果；
- 不复制 `MobileFrame` 的 `max-w-[420px]`、居中容器或左右边框预览外壳。

## 约束

- 只处理移动端视觉，不修改桌面端布局或内容；
- 页面宽度不能被限制到固定移动预览容器；
- 不新增运行时依赖；
- 不重构其它 dapp 页面；
- 当前工作区可能存在其它未提交内容，实现时只触碰本需求相关文件。

## 验收标准

1. 390px 左右移动端视口下，`/dapp/defi` 的 header、nav、hero、swap、partners、protocol、notice、footer 视觉接近参考项目；
2. DeFi 移动端标题使用参考项目的 display 字体风格、粗细、大小和字距；
3. swap card、按钮、状态卡、分割线、背景网格和发光效果与参考项目风格一致；
4. 页面根节点没有 `max-width: 420px` 这类限制，移动端宽度保持 `100vw`；
5. `/dapp/defi` web 端不受影响；
6. Lending/Fun/NFT/My 等其它移动端页面不受影响；
7. `npm run build` 通过；
8. 浏览器移动端检查无新增 React key 或运行时报错。
