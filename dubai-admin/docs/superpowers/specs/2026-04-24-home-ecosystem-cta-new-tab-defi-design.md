# Home Explore the Ecosystem 新标签页跳转 DeFi 设计说明

## 背景

当前项目首页 `HomePage` 是官网入口页，DApp/DeFi 页面已经在项目中独立存在，路由为 `/defi`。首页移动端的 `Explore the Ecosystem` 目前已经指向 `/defi`，但默认会在当前标签页跳转；桌面端 hero 中的同名 CTA 目前是静态结构，尚未接入路由跳转。

用户明确要求：点击官网首页的 `Explore the Ecosystem` 后，应打开新的浏览器标签页进入 `/defi`，原官网首页标签页保留。

## 目标

- 让首页桌面端 hero 的 `Explore the Ecosystem` CTA 可点击。
- 让首页移动端 hero 的 `Explore the Ecosystem` CTA 同样以新标签页方式打开 `/defi`。
- 点击后进入项目已有的 DeFi 页面，而不是在官网首页内部滚动或停留。
- 保持官网首页作为独立入口页，DApp/DeFi 页面导航仍由 DeFi 页面自身负责。

## 范围

本次需求预计涉及：

- `src/features/home/components/HomeChrome.tsx`
  - 为桌面端 CTA 接入新标签页跳转。
- `src/features/home/components/HomeMobilePage.tsx`
  - 将移动端现有 `/defi` 跳转调整为新标签页打开。
- `src/styles/home-page.scss`
  - 如有必要，只补充链接化后的基础样式，例如 `text-decoration: none`、`cursor: pointer`，确保视觉不变。
- `src/styles/home-page-mobile.scss`
  - 如现有样式已覆盖链接状态，则不额外修改；如出现默认链接样式，再做最小样式修正。

## 不在范围

- 不新增 `/dapp`、`/dapp/defi` 等新路由。
- 不改 DeFi 页面自身导航结构。
- 不改按钮文案、图标、尺寸、位置、颜色和整体视觉。
- 不新增模块、不引入新的首页内容。
- 不把桌面端和移动端合并成同一套布局。

## 实现建议

推荐使用 `react-router` 的 `Link`，通过 `to="/defi"`、`target="_blank"`、`rel="noreferrer"` 实现新标签页打开内部路由。

桌面端可将现有 `.dubai-group-584_410` CTA 根节点替换为 `Link`，保留原有 `id`、`className` 和内部结构，尽量不影响现有绝对定位样式。

移动端可在现有 `Link` 上补充 `target="_blank"` 和 `rel="noreferrer"`，保持当前按钮结构和样式。

## 方案取舍

### 推荐方案：React Router Link 新标签页

优点：

- 符合当前项目已经使用 `react-router` 的模式。
- 可直接指向已有 `/defi` 路由。
- 对桌面端和移动端实现方式一致。
- 可保留当前标签页官网页面，同时新标签页进入 DeFi 页面。

注意点：

- 桌面端原本是 `div` 结构，替换为 `Link` 后需要确认默认链接样式不会污染视觉。

### 备选方案：原生 a 标签

优点：

- 原生语义明确，适合新标签页打开。

缺点：

- 项目内已有 `react-router` 链接模式，使用 `Link` 更一致。

### 不推荐方案：useNavigate

原因：

- `useNavigate` 更适合当前标签页内程序式跳转。
- 新标签页打开需要额外调用 `window.open`，对本需求来说不如链接语义直接。

## 验收标准

- 桌面端首页点击 `Explore the Ecosystem` 后，新浏览器标签页打开 `/defi`。
- 移动端首页点击 `Explore the Ecosystem` 后，新浏览器标签页打开 `/defi`。
- 原官网首页标签页不被替换。
- `/defi` 页面仍使用现有独立页面与导航。
- 首页按钮视觉与当前设计保持一致。
- 执行 `npm run build` 通过。

## 关键假设

- 当前项目已有 `/defi` 路由即用户所说的 DApp 页面首个目标页面。
- 新标签页打开的目标使用同源路径 `/defi`，不是外部域名。
- 这次只处理 `Explore the Ecosystem` CTA，不处理导航栏或其他入口。
