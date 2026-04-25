# 首页移动端 Footer 区块参考样式还原规格

## 背景

首页移动端 `home-mobile__footer` 需要继续参考 `app-art-replicator` 的移动端 UI 进行局部还原。用户明确要求 logo 不要改，因此需要保留当前 `.home-mobile__brand home-mobile__brand--footer` 的结构、图片和品牌文字。

参考项目 Footer 区块关键样式：

- footer：`px-5 py-10 border-t border-gem-border/40 bg-gem-surface/40`
- logo：`GemLogo`，但本次不改 `dubai-admin` 当前 logo
- footer copy：`mt-3 text-xs text-muted-foreground leading-relaxed max-w-xs`
- footer grid：`mt-8 grid grid-cols-2 gap-y-6 gap-x-4`
- column title：`font-display text-sm font-bold text-gem-cyan mb-3`
- list：`space-y-2`
- list item：`text-xs text-muted-foreground`
- copyright：`mt-10 pt-6 border-t border-gem-border/40 text-center`
- copyright text：`text-[10px] text-muted-foreground`

## 目标

- 在 `dubai-admin` 移动端首页 Footer 模块中，还原参考项目的背景、边框、间距、说明文案、链接列和版权区域视觉；
- 保留当前 logo，不替换图片、不改 DOM 结构、不改品牌文字；
- 只影响移动端 Footer 模块，不影响 web 端首页，也不扩散到移动端其它模块。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

涉及选择器限定在：

- `.home-mobile__footer`
- `.home-mobile__footer-copy`
- `.home-mobile__footer-grid`
- `.home-mobile__footer-column h3`
- `.home-mobile__footer-column ul`
- `.home-mobile__footer-column li`
- `.home-mobile__footer-column li + li`
- `.home-mobile__footer-note`

明确不修改：

- `.home-mobile__brand--footer`
- `.home-mobile__brand--footer img`
- `.home-mobile__brand--footer span`
- `HomeMobilePage.tsx` 中 footer logo DOM

## 推荐方案

采用局部还原方案：

- 复用已加入项目的 `Orbitron` / `Rajdhani` 字体；
- 只在 footer 相关选择器内覆盖背景、copy、grid、column 和 copyright 样式；
- 保留当前 footer logo 样式；
- 不修改桌面端样式，不重构组件结构。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不修改 footer logo；
- 不修改 footer 文案；
- 不改其它移动端模块；
- 不引入新的远程资源；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关样式文件。

## 验收标准

1. 390px 左右移动端视口下，Footer 背景、边框、padding 接近参考项目；
2. footer copy 的间距、字号、行高、muted 颜色和最大宽度接近参考项目；
3. footer grid 的两列布局、行列间距接近参考项目；
4. column title 使用参考项目展示字体方向，字号、字重和 cyan 颜色对齐；
5. list item 使用参考项目正文样式，字号和 muted 颜色对齐；
6. copyright 区域的上边框、间距、居中和字号对齐；
7. 当前 logo 保持不变；
8. 只影响移动端 Footer 模块，web 端无变化；
9. `npm run build` 通过。
