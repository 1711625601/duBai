# 首页移动端 FAQ 区块参考样式还原规格

## 背景

首页移动端 `home-mobile__section home-mobile__section--faq` 需要继续参考 `app-art-replicator` 的移动端 UI 进行局部还原。当前模块包含 FAQ 折叠列表，以及下方 “HAVE ANY QUESTIONS LEFT?” 联系 CTA。

参考项目 FAQ 区块关键样式：

- 标题：`font-display text-3xl font-bold text-foreground mb-6`
- FAQ 列表：`space-y-3`
- FAQ item：`rounded-full bg-gem-surface/80 border border-gem-border/60 overflow-hidden`
- FAQ button：`w-full flex items-center justify-between px-5 py-3.5 text-left`
- 问题文字：`font-display text-xs font-semibold tracking-wider text-foreground`
- plus/minus 图标：`size=16 text-gem-cyan shrink-0`
- 答案：`px-5 pb-4 text-xs text-muted-foreground leading-relaxed`
- contact 区域：`mt-8`
- contact 文案：`font-display text-sm font-semibold tracking-wider text-foreground`
- contact 次行：`text-foreground/70 mt-1`
- contact 按钮：`mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full gradient-cyan text-primary-foreground text-sm font-semibold shadow-cyan`

## 目标

- 在 `dubai-admin` 移动端首页 FAQ 模块中，还原参考项目的标题、折叠项、问题文字、图标、答案和 contact CTA 视觉；
- 保留当前 FAQ 文案、展开/收起交互、plus/minus 图标逻辑和 `Contact us` 链接；
- 只影响移动端 FAQ 模块，不影响 web 端首页，也不扩散到移动端其它模块。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

涉及选择器限定在：

- `.home-mobile__section--faq`
- `.home-mobile__faq-title`
- `.home-mobile__faq-list`
- `.home-mobile__faq-item`
- `.home-mobile__faq-item--open`
- `.home-mobile__faq-button`
- `.home-mobile__faq-button span`
- `.home-mobile__faq-button svg`
- `.home-mobile__faq-answer`
- `.home-mobile__contact`
- `.home-mobile__contact p`
- `.home-mobile__contact-link`
- `.home-mobile__contact-link svg`

## 推荐方案

采用局部还原方案：

- 复用已加入项目的 `Orbitron` / `Rajdhani` 字体；
- 只在 FAQ 相关选择器内覆盖标题、accordion、答案和 contact CTA 样式；
- 不修改 `HomeMobilePage.tsx`，保留现有交互逻辑；
- 不修改桌面端样式，不重构组件结构。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不修改 FAQ 文案；
- 不改变展开/收起交互；
- 不改其它移动端模块；
- 不引入新的远程资源；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关样式文件。

## 验收标准

1. 390px 左右移动端视口下，FAQ 标题视觉接近参考项目；
2. FAQ item 的背景、边框、圆角、按钮 padding 和列表间距接近参考项目；
3. 问题文字使用参考项目展示字体方向，字号、字重和字距对齐；
4. plus/minus 图标尺寸和 cyan 颜色对齐；
5. 展开答案的 padding、字号、行高和 muted 颜色对齐；
6. contact 文案和按钮视觉接近参考项目；
7. FAQ 展开/收起功能保持正常；
8. 只影响移动端 FAQ 模块，web 端无变化；
9. `npm run build` 通过。
