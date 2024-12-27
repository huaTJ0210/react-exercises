import React, { useEffect } from 'react';

//1、自定义addEventListener
export function useWindowListener(
  eventType: string,
  listener: <T>(e: T) => void
) {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}

// 简单实现useEffectEvent的原理篇
/*

const useEffectEvent = (fn) => {
  const ref = useRef(fn)
  ref.current = fn
  return (...args) => ref.current(...args)
}
  
*/

export const index: React.FC = () => {
  return <div></div>;
};
