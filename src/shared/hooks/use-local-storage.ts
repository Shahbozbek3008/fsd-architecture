import { useState } from 'react';
export const useLocalStorage = <T>(key: string, init: T) => {
  const [val, setVal] = useState<T>(() => { try { const i = localStorage.getItem(key); return i ? JSON.parse(i) : init; } catch { return init; } });
  const save = (v: T) => { setVal(v); localStorage.setItem(key, JSON.stringify(v)); };
  return [val, save] as const;
};