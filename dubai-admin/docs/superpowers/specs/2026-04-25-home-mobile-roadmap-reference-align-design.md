# 首页移动端 Roadmap 区块参考样式还原规格

## 背景

首页移动端 `home-mobile__section home-mobile__section--roadmap` 需要继续参考 `app-art-replicator` 的移动端 UI 进行局部还原。同时，当前控制台出现 React key 重复报错，原因是 `roadmapItems` 中有两条 `period: 'Q1 2026'`，渲染时使用 `key={item.period}` 导致 key 不唯一。

参考项目 Roadmap 区块关键样式：

- 标题：`text-center font-display text-2xl font-bold mb-8`
- timeline 容器：`relative pl-6 space-y-6`
- 竖线：`left-2 top-2 bottom-2 w-px bg-gradient-to-b from-gem-cyan via-gem-cyan/40 to-transparent`
- 节点：`absolute -left-[18px] top-1 h-3 w-3 rounded-full bg-gem-cyan shadow-glow ring-4 ring-background`
- period：`text-gem-cyan text-xs font-display font-bold tracking-wider`
- heading：`flex items-center gap-1.5 mt-1 text-foreground font-display font-semibold text-sm`
- 正文：`mt-1.5 text-xs text-muted-foreground leading-relaxed`

## 目标

- 修复移动端首页 roadmap 的 duplicate key 控制台报错；
- 在 `dubai-admin` 移动端首页 Roadmap 模块中，还原参考项目的标题、时间线、节点、period、heading、正文的字体、粗细、字号、行高、间距和颜色；
- 只影响移动端 Roadmap 模块，不影响 web 端首页，也不扩散到移动端其它模块。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/home/components/HomeMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

涉及选择器限定在：

- `.home-mobile__section--roadmap`
- `.home-mobile__section--roadmap .home-mobile__section-title`
- `.home-mobile__roadmap`
- `.home-mobile__roadmap::before`
- `.home-mobile__roadmap-item`
- `.home-mobile__roadmap-node`
- `.home-mobile__roadmap-period`
- `.home-mobile__roadmap-heading`
- `.home-mobile__roadmap-heading svg`
- `.home-mobile__roadmap-item p`

## 推荐方案

采用局部还原方案：

- React key 从 `item.period` 改为不重复的稳定组合，例如 `period-title-index`；
- 复用已加入项目的 `Orbitron` / `Rajdhani` 字体；
- 只在 `.home-mobile__section--roadmap` 作用域内覆盖标题、timeline、period、heading、正文等样式；
- 不修改桌面端样式，不重构组件结构。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不修改 roadmap 文案；
- 不改其它移动端模块；
- 不引入新的远程资源；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关文件。

## 验收标准

1. 控制台不再出现 `Encountered two children with the same key, Q1 2026`；
2. 390px 左右移动端视口下，Roadmap 标题视觉接近参考项目；
3. 时间线竖线、圆点、ring、glow 与参考项目接近；
4. period 使用参考项目展示字体方向，字号、字重和字距对齐；
5. heading 使用参考项目展示字体方向，图标尺寸和间距对齐；
6. 正文使用参考项目正文样式，字号、行高和 muted 颜色对齐；
7. 只影响移动端 Roadmap 模块，web 端无变化；
8. `npm run build` 通过。
