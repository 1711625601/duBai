# 首页移动端 Features 区块参考样式还原规格

## 背景

首页移动端 `home-mobile__section home-mobile__section--features` 需要继续参考 `app-art-replicator` 的移动端 UI 进行局部还原。用户要求左侧 icon 继续使用 `dubai-admin` 当前 PNG 图标，只对齐颜色和视觉样式，不替换成参考项目中的 lucide 图标。

参考项目 Features 区块关键样式：

- section：`relative px-5 py-12 border-t border-gem-border/30 overflow-hidden`
- 背景：`absolute inset-0 hex-bg opacity-60`
- 标题：`font-display text-3xl font-bold leading-tight mb-8`
- 标题第一行：`text-foreground`
- 标题第二行：`text-gem-cyan`
- 列表：`space-y-4`
- 卡片：`flex gap-4 p-4 rounded-2xl bg-gem-surface/60 border border-gem-border/50 backdrop-blur`
- icon 容器：`shrink-0 h-11 w-11 rounded-full gradient-cyan flex items-center justify-center text-primary-foreground shadow-cyan`
- icon 尺寸：`20px`
- 标题：`font-display font-bold text-sm text-foreground tracking-wide`
- 正文：`mt-1 text-xs text-muted-foreground leading-relaxed`

## 目标

- 在 `dubai-admin` 移动端首页 Features 模块中，还原参考项目的标题、背景、卡片、icon 容器、标题文字、正文文字的字体、粗细、字号、行高、间距和颜色；
- 保留当前 PNG icon 图片，不替换 icon 资源；
- 只影响移动端 Features 模块，不影响 web 端首页，也不扩散到移动端其它模块。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

涉及选择器限定在：

- `.home-mobile__section--features`
- `.home-mobile__section--features::before`
- `.home-mobile__section--features .home-mobile__section-title`
- `.home-mobile__feature-list`
- `.home-mobile__feature-card`
- `.home-mobile__feature-icon`
- `.home-mobile__feature-icon img`
- `.home-mobile__feature-copy h3`
- `.home-mobile__feature-copy p`

## 推荐方案

采用局部还原方案：

- 复用已加入项目的 `Orbitron` / `Rajdhani` 字体；
- 只在 `.home-mobile__section--features` 作用域内覆盖标题、卡片、icon 容器、文案样式；
- icon 图片继续来自当前 `featureItems.image`，仅通过容器尺寸、渐变背景、阴影，以及图片显示尺寸/颜色处理来对齐参考项目；
- 不修改桌面端样式，不重构组件结构。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不替换当前 PNG icon；
- 不修改 features 文案；
- 不改其它移动端模块；
- 不引入新的远程资源；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关样式文件。

## 验收标准

1. 390px 左右移动端视口下，Features 标题视觉接近参考项目；
2. Features 背景、卡片背景、边框、圆角和 blur 接近参考项目；
3. 左侧 icon 使用当前 PNG，但外层圆形、cyan 渐变和阴影与参考项目接近；
4. Features 标题文字使用参考项目展示字体方向，字号、字重和字距对齐；
5. 正文使用参考项目正文样式，字号、行高和 muted 颜色对齐；
6. 只影响移动端 Features 模块，web 端无变化；
7. `npm run build` 通过。
