# 首页移动端首屏视觉光效对齐设计说明

## 背景

当前首页移动端已经采用独立实现，不直接复用桌面端布局。用户在对比 `app-art-replicator` 项目的移动端首页后，发现当前项目首屏与参考项目存在明显视觉差异，主要集中在：

- CTA 按钮颜色偏纯色，缺少参考项目中的 cyan 渐变和发光感；
- hero 硬币外圈放射光不够明显，整体电光感弱于参考项目；
- 顶部蓝色阴影/光效偏重，并且会影响到 hero 下方模块；
- 这些差异属于移动端首页首屏视觉 token 和局部光效问题，不是内容、布局或图片资源问题。

本次调整目标是让当前首页移动端首屏更接近 `app-art-replicator` 的移动端视觉气质，同时保留当前项目已经确认过的移动端独立布局。

## 目标

对首页移动端首屏进行局部视觉修正，使其在 390px 移动端视口下更接近参考项目：

- 主按钮恢复 cyan 渐变和更明显的 glow；
- 硬币外圈使用参考项目原始 `drop-shadow`，并通过硬币局部容器补充受控 glow；
- 页面和首屏背景基底使用纯黑，移除全局蓝色渐变污染；
- `features` 区块不再叠加独立蓝色背景光；
- 移动端 cyan 按钮文字默认使用与 `GEMCHAIN` 标题一致的字体，但 `Explore the Ecosystem` 主按钮使用默认字体；
- hero 副标题字体保持当前实现，不在本次调整中改动；
- 保持当前首页移动端布局、文案和图片不变。

## 范围

本次预计只修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

重点涉及选择器：

- `.home-mobile`
- `.home-mobile__device::after`
- `.home-mobile__hero::before`
- `.home-mobile__hero-media::before`
- `.home-mobile__hero-media img`
- `.home-mobile__primary-action`
- `.home-mobile__section--features::before`
- `.home-mobile__login`
- `.home-mobile__news-link`
- `.home-mobile__contact-link`

不修改：

- 首页桌面端样式；
- 首页移动端组件结构；
- 首页移动端文案；
- 首页移动端图片资源；
- dapp 页面或其他业务页面；
- 路由、交互逻辑和数据结构。

## 现状分析

### 参考项目视觉

`app-art-replicator` 中移动端首页使用了较集中的 cyan token：

- `--gradient-cyan: linear-gradient(135deg, oklch(0.78 0.18 220), oklch(0.65 0.2 230))`
- `--shadow-cyan: 0 8px 32px oklch(0.65 0.2 230 / 0.35)`
- hero 硬币使用较强的 cyan `drop-shadow`
- hero 背景光效主要限制在 hero 区域内

因此参考项目首屏呈现为：

- 按钮有渐变方向和发光；
- 硬币周围有明显但不刺眼的 cyan 光晕；
- 下方模块不会被顶部蓝光明显污染。

### 当前项目视觉

当前首页移动端 `home-page-mobile.scss` 中已经存在移动端 cyan token：

- `--home-mobile-cyan: #24c8ff`
- `--home-mobile-gradient: linear-gradient(90deg, #27c8fb 0%, #5c7bff 100%)`

但实际首屏仍有差异：

1. `.home-mobile__primary-action` 单独覆盖为纯色：
    - `background: rgba(35, 199, 235, 1)`
    - 导致按钮看起来比参考项目更扁平。

2. `.home-mobile__hero-media img` 的硬币阴影偏弱：
    - 当前为 `drop-shadow(0 20px 42px rgba(30, 144, 255, 0.28))`
    - 透明度和 cyan 色感都弱于参考项目。

3. `.home-mobile` 与 `.home-mobile__device::after` 的背景光效偏全局：
    - `.home-mobile` 顶部径向渐变影响整个页面基底；
    - `.home-mobile__device::after` 使用 `inset: 0` 覆盖整个移动端页面；
    - 顶部蓝光和右侧蓝紫光会持续影响后续 section。

## 可选方案

### 方案 A：只修按钮

做法：

- 移除 `.home-mobile__primary-action` 的纯色覆盖；
- 让主按钮重新使用 `--home-mobile-gradient`；
- 增强按钮 box-shadow。

优点：

- 改动最小；
- 风险最低。

缺点：

- 硬币放射光和顶部阴影污染仍然存在；
- 与参考项目差异仍明显。

### 方案 B：局部精修首屏视觉 token 和光效

做法：

- 调整移动端 cyan 渐变方向和阴影强度；
- 主按钮使用渐变和更接近参考项目的 glow；
- 加强 hero 硬币 cyan `drop-shadow`；
- 收敛 `.home-mobile` 和 `.home-mobile__device::after` 的全局蓝色光效；
- 将主要 hero 光效留在 `.home-mobile__hero::before` 内部。

优点：

- 能同时解决用户指出的按钮、硬币、顶部阴影三个问题；
- 只触碰移动端首页样式文件；
- 不改变布局、文案、图片和组件结构；
- 风险可控，便于截图验收。

缺点：

- 不是逐像素复刻参考项目；
- 需要通过实际移动端截图微调光效强度。

### 方案 C：整体迁移参考项目移动端视觉体系

做法：

- 大范围参考 `app-art-replicator` 的移动端 token、背景、section、按钮、卡片、边框、字体层级。

优点：

- 与参考项目整体接近度最高。

缺点：

- 影响范围大；
- 容易牵动已经完成对齐的移动端模块；
- 可能引入用户不想要的边框、卡片层级或新的视觉结构。

## 推荐方案

采用 **方案 B：局部精修首屏视觉 token 和光效**。

原因：

- 用户指出的问题都集中在首屏视觉光效，不需要重做移动端结构；
- 当前移动端内容、图片和布局已经过多轮调整，不应大范围重写；
- 局部精修可以更稳地对齐参考项目气质，同时保留当前官网实现；
- 后续可以通过 390px 移动端截图直接验收。

## 设计细节

### 1. 按钮颜色与发光

调整方向：

- 保留 `--home-mobile-gradient` 作为移动端按钮统一渐变 token；
- 将渐变方向从当前偏横向的 `90deg` 调整为更接近参考项目的 `135deg`；
- `.home-mobile__primary-action` 不再使用纯色背景覆盖；
- 主按钮使用更明显的 cyan box-shadow；
- 不新增按钮文案、不改变按钮尺寸和布局位置。

预期效果：

- `Explore the Ecosystem` 按钮从纯青色变为 cyan 蓝色渐变；
- 按钮下方和周围有更明显的柔和发光；
- 与顶部 Login 按钮的视觉语言保持统一。
- `Login`、`View Details`、`Contact us` 等 cyan 按钮文字使用 `DFPZongYiW7-GB-Regular`，与 `GEMCHAIN` 标题字体保持一致；
- `Explore the Ecosystem` 主按钮使用默认字体，不使用华康字体；
- 按钮文字和 hero 标题显式设置 `font-weight: 400`，避免浏览器默认或继承样式导致额外加粗；
- hero 副标题字体保持当前实现，不跟随 `Explore the Ecosystem` 主按钮改为默认字体。

### 2. 硬币放射光

调整方向：

- 保留当前移动端 hero 硬币图片；
- 保留当前硬币尺寸和位置；
- 删除 `.home-mobile__hero-media::before` 的额外圆形 glow；
- `.home-mobile__hero-media img` 使用短距离多层 `drop-shadow`，将发光限制在硬币图片自身；
- 发光贴近硬币边缘约 2px 最明显，到约 5px 逐步消失；
- 不恢复覆盖整个 hero 的蓝色背景层。

预期效果：

- 硬币外圈有贴边微光；
- 光效不应变成大片雾面蓝块，也不污染 hero 背景；
- 不改变硬币裁切和布局节奏。

### 3. 顶部蓝色阴影收敛

调整方向：

- `.home-mobile` 和 `.home-mobile__device` 的背景基底改为纯黑；
- 移除 `.home-mobile` 顶部径向背景；
- 关闭 `.home-mobile__device::after` 的全局蓝光；
- 移除 `.home-mobile__hero::before` 的首屏蓝色径向底光；
- 避免全页伪元素将 hero 顶部光效带到下方 section；
- 科技线框纹理改为低透明中性色，避免继续形成浅蓝底色。

预期效果：

- 页面背景基底接近纯黑；
- 下方 section 不再被顶部蓝光明显压暗或染蓝；
- 仅保留按钮和硬币等元素自身的 cyan 发光。

### 4. Features 区块背景污染

调整方向：

- 关闭 `.home-mobile__section--features::before` 的蓝色径向背景；
- 不改变 `features` 区块的卡片、图标、文案和布局；
- 保留页面低透明中性网格，不再使用蓝色底光染色。

预期效果：

- `features` 区块背景不再呈现独立浅蓝渐变；
- 区块底色与整体纯黑移动端背景保持一致；
- 卡片自身暗色背景仍保留。

## 验收标准

完成后需要满足：

1. 390px 移动端视口下，主 CTA 按钮呈现 cyan 渐变，而不是纯色块；
2. CTA 按钮拥有比当前更明显的柔和发光，但不遮挡文字；
3. hero 硬币外圈有更明显的 cyan 放射光；
4. 硬币图片、尺寸、位置和文案保持不变；
5. 页面和首屏背景基底不再呈现整片浅蓝渐变；
6. `features` 区块不再被独立蓝色伪元素污染；
7. `Explore the Ecosystem` 主按钮使用默认字体，其它 cyan 按钮文字字体与 `GEMCHAIN` 标题字体一致，且不额外加粗；
8. hero 副标题字体保持当前实现，不因本次调整发生变化；
9. 首页桌面端不受影响；
10. 不新增模块、不改布局、不改图片、不改文案；
11. `npm run build` 通过；
12. 修改后保留一张 390px 移动端截图用于人工对比。

## 关键假设

- 本次以 `app-art-replicator` 移动端首屏为视觉参考，但不要求逐像素复刻；
- 用户当前确认的范围仅包含按钮颜色、按钮 glow、硬币 glow、顶部阴影影响范围；
- 移动端首页仍按当前项目结构独立维护；
- 后续如需继续对齐其他 section，应另起独立 spec。
