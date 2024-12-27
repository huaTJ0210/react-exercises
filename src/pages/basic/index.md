### 1、immer 的使用

> 为什么要使用 immer：react 中状态对象应该视为不可变的，所以我们需要一种机制来帮助我们在不改变原始对象的情况下创建一个新的对象。

> npm install use-immer

### 2、响应事件

> - 给 JSX 元素绑定事件处理函数
> - 事件触发三个阶段 （阻止事件冒泡 stopPropagation，阻止事件的默认行为 preventDefault）
> - 父组件将事件通过 props 传递给子组件

### 3、组件的记忆 state

> - useState : 将状态存储在某个 store 中，触发组件更新
