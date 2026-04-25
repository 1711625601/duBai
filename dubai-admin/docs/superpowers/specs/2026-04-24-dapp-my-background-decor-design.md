# DApp My 页面背景装饰补齐设计说明

## 背景

DApp 路由改造后，`/dapp/my` 复用了个人中心主体内容，并统一使用新的 DApp 固定顶部导航。由于旧个人中心的背景装饰原本放在 `ProfileChrome` 中，而新的 My 页面不再渲染 `ProfileChrome`，导致桌面端个人中心背景中的线框和模糊硬币装饰缺失。

用户提供的切图资源为：

`/Users/lei/Codehub/duBai/gemchain（切图）/个人中心/Group 471.png`

该图片尺寸为 `1920 × 996`，适合作为桌面端个人中心背景装饰层。

## 目标

- 在 `/dapp/my` 桌面端补回个人中心背景装饰。
- 使用用户提供的 `Group 471.png` 作为背景装饰图。
- 保持 DApp 顶部导航不变。
- 保持个人中心内容卡片和文案不变。

## 范围

本次预计涉及：

- 将背景切图复制到项目资源目录，并使用语义化命名。
- 在 `/dapp/my` 的桌面端内容中增加一个背景装饰层。
- 增加对应 SCSS 样式，控制其层级、尺寸和位置。

## 不在范围

- 不恢复旧 `ProfileChrome`，避免旧导航与新 DApp 固定导航重复。
- 不修改 DeFi、Fun、NFT 页面。
- 不修改个人中心业务内容、按钮、表格或文案。
- 不处理移动端个人中心背景，移动端保持独立适配现状。

## 实现方案

推荐方案：

- 将 `Group 471.png` 复制为 `src/assets/images/profile-background-decor.png`。
- 在 `DappPage` 的 `my` 内容配置中，在个人中心主体内容前插入背景装饰节点。
- 在 `dapp-page.scss` 中为背景装饰节点设置：
  - `position: absolute`
  - `left: 0`
  - `top: 68px` 或接近导航下方的位置
  - `width: 1920px`
  - `height: 996px`
  - `background-image`
  - `pointer-events: none`
  - 低层级，保证内容卡片和顶部导航可交互且可见

## 验收标准

- 访问 `/dapp/my` 桌面端时，可以看到背景线框和模糊硬币装饰。
- 顶部 DApp 导航仍固定显示，且 `My` 为 active。
- 个人中心内容不被背景遮挡。
- 移动端个人中心不受影响。
- `npm run build` 与 `npm run lint` 通过。

## 关键假设

- 用户确认本次只补桌面端 `/dapp/my` 背景装饰。
- 提供的 `Group 471.png` 即设计稿中缺失的完整背景装饰切图。
