# 首页移动端 News 模块对齐 Web 端设计说明

## 背景

当前首页移动端 `home-mobile__section home-mobile__section--news` 模块与 Web 端新闻模块存在明显不一致：

- 图片资源仍然使用了移动端参考项目中的独立图片；
- 文案没有完全以当前 Web 端为准；
- 只有第一张卡片带有 `View Details` 入口，后两张缺少箭头入口；
- 视觉结构已经是移动端单列适配，但内容层和交互层没有同步到当前官网桌面稿。

用户希望：

- 首页 Web 端维持现状不变；
- 首页移动端 `news` 模块以当前 Web 端新闻模块为准；
- 图片、文案、箭头入口都要同步；
- 移动端仍然保持独立适配版，而不是直接缩放 Web 结构。

## 目标

将首页移动端 `news` 模块调整为“内容与素材对齐 Web 端、布局继续保留移动端单列适配”的实现。

## 范围

本次只修改以下内容：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/home/components/HomeMobilePage.tsx`
- `/Users/lei/Codehub/duBai/dubai-admin/src/styles/home-page-mobile.scss`

不修改以下内容：

- 首页 Web 端新闻模块
- 其他首页模块
- 其他页面的移动端

## 现状分析

### Web 端对应模块

当前 Web 端新闻模块位于：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/home/components/HomeCommunitySections.tsx`

其内容结构为：

1. 一张主卡片
   - 图片：`home-news-feature-card-cover.png`
   - 标题：`mining economics are facing a structural test.`
   - 描述：`According to a recent report from trading firm Wintermute, the current cycle has`
   - 按钮：`View Details`

2. 一张右上小卡片
   - 图片：`home-news-side-card-bottom-cover.png`
   - 标题：`mining economics are facing a structural test.`
   - 右侧蓝色小箭头

3. 一张右下小卡片
   - 图片：`home-news-side-card-top-cover.png`
   - 标题：`mining economics are facing a structural test.`
   - 右侧蓝色小箭头

### 移动端现状

当前移动端新闻模块位于：

- `/Users/lei/Codehub/duBai/dubai-admin/src/features/home/components/HomeMobilePage.tsx`

问题主要有：

- 使用了 `home-mobile-news-ai.jpg / home-mobile-news-mining.jpg / home-mobile-news-linkedin.jpg`
- 文案没有完全以 Web 端为主
- 只有第一张卡片有 CTA，其他两张没有箭头

## 可选方案

### 方案一：保留移动端单列结构，只同步素材与内容

做法：

- 保留当前移动端 `news-list > news-card` 的单列布局；
- 将三张卡片的图片全部替换为 Web 端新闻模块的三张图片；
- 将标题、描述、按钮文本全部与 Web 端对齐；
- 三张卡片都增加箭头入口，其中第一张继续保留 `View Details` 文案 + 箭头，另外两张使用右侧小箭头。

优点：

- 改动最稳；
- 保持移动端阅读和点击体验；
- 满足“Web 一套、移动端一套”的要求；
- 不会把移动端重新做成压缩版桌面布局。

缺点：

- 与 Web 端的 1 大 2 小视觉排布不会完全一致。

### 方案二：在移动端模拟 Web 端的 1 大 2 小排布

做法：

- 第一张卡片单独大图；
- 第二、三张卡片做成更紧凑的次级卡片；
- 尽量模仿桌面视觉节奏。

优点：

- 更接近桌面端的视觉关系。

缺点：

- 手机端可读性更差；
- 标题与箭头更容易再次发生挤压；
- 额外样式复杂度更高。

## 推荐方案

采用 **方案一**。

原因：

- 用户核心诉求是“图片、文案、箭头要和 Web 对齐”，不是要求移动端完全复刻 Web 排版；
- 当前移动端已经有单列结构，继续沿用更稳；
- 可以用最小改动实现高一致性的内容同步。

## 设计细节

### 数据层调整

移动端 `newsItems` 将改成直接映射当前 Web 端新闻内容：

1. 主卡片
   - 图片：`home-news-feature-card-cover.png`
   - 标题：`mining economics are facing a structural test.`
   - 描述：`According to a recent report from trading firm Wintermute, the current cycle has`
   - CTA：`View Details`

2. 次卡片一
   - 图片：`home-news-side-card-bottom-cover.png`
   - 标题：`mining economics are facing a structural test.`
   - CTA：箭头按钮

3. 次卡片二
   - 图片：`home-news-side-card-top-cover.png`
   - 标题：`mining economics are facing a structural test.`
   - CTA：箭头按钮

### 结构层调整

保持当前：

- `home-mobile__news-list`
- `home-mobile__news-card`
- `home-mobile__news-copy`

但允许：

- 第一张卡片保留 `View Details + 箭头`
- 第二、三张卡片增加右侧小箭头容器

### 样式层调整

移动端新闻卡片样式将做如下同步：

- 图片高度与裁切方式继续保留移动端友好的单列展示；
- 标题字号和行高参考当前 Web 端刚修过的效果，避免箭头被挡住；
- 第一张按钮颜色沿用官网 CTA 青蓝色；
- 第二、三张卡片增加和 Web 端一致语义的蓝色箭头入口；
- 预留右侧箭头安全区，避免再次出现标题压住箭头的问题。

## 验收标准

完成后需要满足：

1. 首页移动端 `news` 模块三张卡片全部使用 Web 端对应图片；
2. 标题和描述文案以当前 Web 端为准；
3. 三张卡片都具备箭头入口；
4. 第一张卡片继续显示 `View Details`；
5. 第二、三张卡片的箭头完整可见，不被标题遮挡；
6. 移动端仍保持单列适配，不退化成桌面压缩版；
7. `npm run build` 通过。
