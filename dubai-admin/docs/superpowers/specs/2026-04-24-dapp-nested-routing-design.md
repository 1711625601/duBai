# DApp 嵌套路由与固定导航设计说明

## 背景

当前项目中，官网首页位于 `/`，DApp 相关页面目前以独立路由存在，例如 `/defi`、`/fun`、`/profile`。这些页面各自拥有页面结构，桌面端顶部导航也分散在不同页面的 Chrome 组件中。

新的产品方向是：官网首页只作为入口；DApp 应该是一个独立应用区域。进入 DApp 后，顶部导航保持固定，导航下方的内容区根据子路由切换。

## 目标

- 新增 DApp 入口路由 `/dapp`。
- `/dapp` 默认进入 DeFi。
- DApp 内部页面使用统一子路由：
  - `/dapp/defi`：DeFi 页面
  - `/dapp/fun`：Fun 页面
  - `/dapp/nft`：NFT 预留页，显示“暂未开发”
  - `/dapp/my`：个人中心页面
- DApp 顶部导航固定存在，不因为点击 DeFi、Fun、NFT、My 而整体替换。
- 官网首页 `Explore the Ecosystem` 新标签页打开 `/dapp`。

## 范围

本次需求预计涉及：

- 路由配置
  - 增加 `/dapp` 父路由和 DApp 子路由。
  - 将 `/dapp` 默认导向 DeFi。
- DApp 页面结构
  - 增加 DApp 固定外壳组件，承载顶部导航和内容区域。
  - 将 DeFi、Fun、NFT、My 作为 DApp 外壳下的内容页。
- 官网首页 CTA
  - 将 `Explore the Ecosystem` 的新标签页目标从 `/defi` 调整为 `/dapp`。
- 导航配置
  - 将 DApp 导航项调整为 `DeFi`、`Fun`、`NFT`、`My`。
  - `DeFi` 指向 `/dapp/defi`。
  - `Fun` 指向 `/dapp/fun`。
  - `NFT` 指向 `/dapp/nft`。
  - `My` 指向 `/dapp/my`。

## 不在范围

- 不重做官网首页视觉。
- 不新增 DApp 以外的业务页面。
- 不实现 NFT 的真实业务内容，只显示“暂未开发”占位。
- 不新增无中生有的营销文案。
- 不改变 DeFi、Fun、个人中心已有主体内容的设计方向。

## 路由设计

推荐采用嵌套路由结构：

```text
/                  官网首页
/dapp              DApp 入口，默认进入 DeFi
/dapp/defi         DeFi
/dapp/fun          Fun
/dapp/nft          NFT 暂未开发
/dapp/my           My / 个人中心
```

为了让结构清晰，导航中的 DeFi 也使用显式地址 `/dapp/defi`。`/dapp` 只作为入口，可以通过默认重定向或默认渲染方式进入 DeFi。

## 页面结构设计

建议增加一个 DApp 外壳组件，例如 `DappPage` 或 `DappLayout`：

- 外壳负责：
  - DApp 背景和页面框架。
  - 固定顶部导航。
  - 导航 active 状态。
  - 渲染子页面内容。
- 子页面负责：
  - DeFi 内容。
  - Fun 内容。
  - NFT 占位内容。
  - My/个人中心内容。

这样点击导航时，顶部导航保持不变，只切换下方内容区。

## 内容复用策略

当前已有 `DefiPage`、`FunPage`、`ProfilePage`。本次不应大面积重写页面内容，而是优先复用已有页面模块。

推荐做法：

- 将 DeFi、Fun、Profile 中的主体内容逐步抽成可被 DApp 外壳承载的内容组件。
- DApp 子路由复用这些内容组件。
- 旧独立页面如仍需保留，可作为兼容入口重定向到新的 DApp 子路由。

兼容建议：

- `/defi` 可重定向到 `/dapp/defi`。
- `/fun` 可重定向到 `/dapp/fun`。
- `/profile` 可重定向到 `/dapp/my`。

这样可以避免旧入口、旧链接或已有代码引用立即失效，同时新导航统一使用 `/dapp/...`。

## 导航设计

DApp 导航顺序：

1. `DeFi`
2. `Fun`
3. `NFT`
4. `My`

导航行为：

- 点击 `DeFi`：进入 `/dapp/defi`。
- 点击 `Fun`：进入 `/dapp/fun`。
- 点击 `NFT`：进入 `/dapp/nft`，内容区显示“暂未开发”。
- 点击 `My`：进入 `/dapp/my`，内容区显示个人中心。
- 顶部导航自身不随子路由切换而消失或换成另一个页面的导航。

## 移动端策略

移动端当前多个 DApp 类页面已使用 `MobilePageShell`。本次应同步移动端导航结构：

- 移动端 DApp 导航项也调整为 `DeFi`、`Fun`、`NFT`、`My`。
- 移动端内容同样以 `/dapp/...` 子路由切换。
- 保持移动端独立适配原则，不把桌面端直接压缩成移动端。

## 验收标准

- 从官网首页点击 `Explore the Ecosystem`，新标签页打开 `/dapp`。
- `/dapp` 默认进入 DeFi 页面。
- DApp 导航显示 `DeFi`、`Fun`、`NFT`、`My`。
- 点击 `Fun` 后，顶部导航保持不变，下方内容显示 Fun 页面。
- 点击 `NFT` 后，顶部导航保持不变，下方内容显示“暂未开发”。
- 点击 `My` 后，顶部导航保持不变，下方内容显示个人中心页面。
- 导航 active 状态与当前子路由一致。
- 移动端和桌面端都遵循同一路由语义。
- 执行 `npm run build` 通过。

## 关键假设

- 用户确认采用方案 B：显式保留 `/dapp/defi`，同时 `/dapp` 默认进入 DeFi。
- NFT 只做占位，不需要真实业务和复杂视觉。
- 旧 `/defi`、`/fun`、`/profile` 路由建议保留为重定向兼容入口。
- 本次重点是路由结构和固定导航行为，不进行大规模视觉重构。
