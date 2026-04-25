# 首页移动端 News 区块参考样式还原规格

## 背景

首页移动端 `home-mobile__section home-mobile__section--news` 需要继续参考 `app-art-replicator` 的移动端 UI 进行局部还原。用户要求图片继续使用 `dubai-admin` 当前自己的三张图片，并保留第二、第三张 news 卡片右侧的箭头按钮。

参考项目 News 区块关键样式：

- 标题：`text-center font-display text-2xl font-bold mb-8`
- 列表：`space-y-4`
- 卡片：`rounded-2xl overflow-hidden bg-gem-surface/80 border border-gem-border/50`
- 图片：`w-full h-44 object-cover`
- 内容区：`p-4`
- 标题文字：`font-display font-semibold text-sm text-foreground leading-snug`
- featured 按钮：`mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full gradient-cyan text-primary-foreground text-xs font-semibold`

## 目标

- 在 `dubai-admin` 移动端首页 News 模块中，还原参考项目的标题、列表、卡片、图片、文字和按钮视觉；
- 保留当前项目自己的 news 图片，不替换为参考项目图片；
- 保留第二、第三张卡片右侧的 `.home-mobile__news-arrow` 箭头按钮，并将其颜色对齐 cyan 风格；
- 只影响移动端 News 模块，不影响 web 端首页，也不扩散到移动端其它模块。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

涉及选择器限定在：

- `.home-mobile__section--news`
- `.home-mobile__section--news .home-mobile__section-title`
- `.home-mobile__news-list`
- `.home-mobile__news-card`
- `.home-mobile__news-card img`
- `.home-mobile__news-copy`
- `.home-mobile__news-copy h3`
- `.home-mobile__news-card--featured .home-mobile__news-copy`
- `.home-mobile__news-card--featured .home-mobile__news-copy h3`
- `.home-mobile__news-description`
- `.home-mobile__news-link`
- `.home-mobile__news-arrow`

## 推荐方案

采用局部还原方案：

- 复用已加入项目的 `Orbitron` / `Rajdhani` 字体；
- 只在 `.home-mobile__section--news` 作用域内覆盖标题、卡片、图片、按钮、箭头样式；
- 保留当前三张图片和组件结构；
- 第 2/3 张卡片继续展示右侧箭头，箭头尺寸与颜色按当前 cyan 体系收敛；
- 不修改桌面端样式，不重构组件结构。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不替换当前 news 图片；
- 不删除第 2/3 张卡片箭头；
- 不修改 news 文案；
- 不改其它移动端模块；
- 不引入新的远程资源；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关样式文件。

## 验收标准

1. 390px 左右移动端视口下，News 标题视觉接近参考项目；
2. News 卡片背景、边框、圆角和图片高度接近参考项目；
3. News 标题文字使用参考项目展示字体方向，字号、字重和行高对齐；
4. featured 卡片的 `View Details` 按钮视觉接近参考项目；
5. 第二、第三张卡片右侧箭头保留，颜色与 cyan 体系对齐；
6. 图片继续使用 `dubai-admin` 当前自己的图片；
7. 只影响移动端 News 模块，web 端无变化；
8. `npm run build` 通过。
