import React, { useState, useCallback, useMemo } from 'react';
import Child from './child.tsx';

/**
 * (1) 使用memo包裹函数组件，可以保证在给子组件传入相同的props时，跳过子组件的渲染
 * (2) 在给子组件传递props中，如果存在函数类型，则需要使用useCallback进行缓存,避免
 * 组件每次渲染都产生新的函数
 */

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Index: React.FC = () => {
  const [count, setCount] = useState(0);
  // 组件再次渲染时，如果依赖项没有变更，则使用的是缓存的值，数据计算的函数不会再执行
  const showList = useMemo(() => {
    return list.filter((item) => {
      console.log(item);
      return item % 2 === 0;
    });
  }, []);
  const add = useCallback(() => {
    console.log('add');
  }, []);
  return (
    <div>
      <Child add={add} />
      <div onClick={() => setCount((c) => c + 1)}>{count}</div>
      <ul>
        {showList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
