import React, { useRef, forwardRef, useImperativeHandle } from 'react';

export const Index: React.FC = () => {
  const ref = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const childRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // 多次渲染能记录上一次的值，同时修改不会触发重新渲染
    ref.current = ref.current + 1;
    // 可以获取到dom元素
    inputRef.current!.focus();
    console.log(ref.current);
  };
  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>click</button>
      <Child ref={childRef}></Child>
    </div>
  );
};

const Child = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  /*
 useImperativeHandle 可以控制子组件暴露的内容
*/
  useImperativeHandle(ref, () => {
    return {
      // 对外暴露的方法
      focus: () => {
        inputRef.current!.focus();
      }
    };
  });
  return (
    <div {...props}>
      <input ref={inputRef}></input>
    </div>
  );
});
