# 首页移动端 Header 居中 Logo 调整规格

## 背景

首页移动端 `home-mobile__header` 当前左侧展示 logo，右侧展示 `Login` 和汉堡菜单。用户要求移动端 header 参考 web 端：只保留 logo 和标题，并整体居中；去掉 `Login` 和面包/汉堡导航。

web 端 header 关键样式：

- header 高度约 `80px`
- logo 组水平居中
- logo 图标约 `31px`
- `GEM` 标题约 `40px`
- logo 与标题间距约 `14px`

## 目标

- 移动端 header 只展示 logo 图标和 `GEM` 标题；
- logo 组在 header 内水平居中；
- 移除 `Login` 按钮、汉堡/关闭按钮和移动端下拉 nav；
- 不影响 web 端首页。

## 范围

预计修改：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/home/components/HomeMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

涉及选择器：

- `.home-mobile__header`
- `.home-mobile__brand`
- `.home-mobile__brand img`
- `.home-mobile__brand span`

允许删除或停用：

- `navItems`
- `menuOpen`
- header actions
- `home-mobile__login`
- `home-mobile__menu-toggle`
- `home-mobile__menu`
- `MenuIcon`
- `CloseIcon`

## 推荐方案

采用结构和样式同步精简方案：

- `HomeMobilePage.tsx` 中移除移动端 header 的右侧 actions 与菜单 nav；
- 保留 FAQ 的 `useState`；
- 删除仅服务移动端菜单的无用常量和 icon 组件；
- `home-page-mobile.scss` 中把 header 改为居中布局，并将 header 内品牌尺寸接近 web 端；
- 保留 footer 的 logo 样式不受影响。

## 约束

- 不修改 web 端样式文件 `home-page.scss`；
- 不修改桌面端组件；
- 不影响 FAQ 展开状态；
- 不改 hero、about、roadmap、features、news、faq、footer 其它模块；
- 当前工作区已有大量未提交改动，实现时只触碰本需求相关文件。

## 验收标准

1. 390px 左右移动端视口下，header 中 logo + `GEM` 完全水平居中；
2. `Login` 不再显示；
3. 汉堡/关闭按钮不再显示；
4. 移动端下拉菜单不再存在；
5. footer logo 不受本次调整影响；
6. web 端无变化；
7. `npm run build` 通过。
