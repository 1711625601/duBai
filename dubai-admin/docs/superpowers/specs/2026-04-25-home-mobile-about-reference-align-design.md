# 首页移动端 About 区块参考样式还原规格

## 背景

`dubai-admin` 官网首页移动端的 `home-mobile__section home-mobile__section--about` 模块，需要对齐参考项目 `app-art-replicator` 中已经写好的移动端 About UI。当前差异主要集中在标题、label、列表文字的字体、字重、字号、行高和视觉密度上。

参考项目关键样式：

- 页面基础字体：`Rajdhani`, `Inter`, `system-ui`, `sans-serif`
- 展示字体：`.font-display` 使用 `Orbitron`, `Rajdhani`, `sans-serif`
- About label：`text-[10px] font-display tracking-[0.3em]`
- About 标题：`font-display text-base leading-relaxed`
- 标题高亮：`text-gem-cyan font-bold`
- 列表文案：`text-xs text-foreground/80 leading-snug`
- 列表容器：`px-4 py-3 rounded-full bg-gem-surface/80 border border-gem-border/60`

## 目标

- 在 `dubai-admin` 移动端首页 About 模块中百分百还原参考项目的文字视觉，重点是字体、粗细、字号、行高、字距和文字密度。
- 只影响移动端 About 模块，不影响 web 端首页，也不扩散到移动端其它模块。
- 保持当前文案和 DOM 结构不变，除非实现字体资源时确有必要补充最小资源声明。

## 范围

预计主要修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

允许在必要时补充：

- `/Users/lei/Codehub/duBai/dubai-admin/src/assets/styles/font.css`
- `/Users/lei/Codehub/duBai/dubai-admin/src/assets/fonts/` 中与 `Orbitron`、`Rajdhani` 对应的本地字体文件

涉及选择器限定在：

- `.home-mobile__section--about`
- `.home-mobile__section--about::before`
- `.home-mobile__section--about .home-mobile__section-label`
- `.home-mobile__about-title`
- `.home-mobile__about-title-accent`
- `.home-mobile__about-cards`
- `.home-mobile__about-card`
- `.home-mobile__about-card p`
- 如需字体声明，仅新增 `@font-face`，不改全局字体默认值

## 推荐方案

采用局部复刻方案：

- 在 `dubai-admin` 中补齐参考项目使用的字体能力；
- 仅在 `.home-mobile__section--about` 作用域内使用 `Orbitron` / `Rajdhani` 字体链；
- 将 About label、标题、高亮标题、列表文案和胶囊列表参数对齐参考项目；
- 保留当前移动端 About 背景网格与暗色胶囊方向，并以参考项目 token 数值校准。

不采用整体移动端字体替换，因为那会影响 hero、roadmap、news、faq 等其它模块，超出本次“只改 About 移动端”的范围。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不修改 About 文案；
- 不重构 `HomeMobilePage.tsx`；
- 不改其它移动端模块的字体和字号；
- 不引入远程 Google Fonts，避免运行时依赖外部网络；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关文件，避免覆盖用户已有变更。

## 验收标准

1. 在 390px 左右移动端视口下，About label、标题、标题高亮、列表文案的字体观感与 `app-art-replicator` 对应模块一致；
2. About 标题使用参考项目展示字体方向，字号、行高、字重、字距与参考项目一致；
3. 标题高亮部分保持 cyan 且字重为参考项目的 bold 观感；
4. 列表文案使用参考项目正文方向，字号、行高、颜色透明度接近 `text-xs text-foreground/80 leading-snug`；
5. 列表胶囊的内边距、圆角、暗色半透明背景和边框接近参考项目；
6. 只影响移动端 About 模块，web 端无变化；
7. `npm run build` 通过。
