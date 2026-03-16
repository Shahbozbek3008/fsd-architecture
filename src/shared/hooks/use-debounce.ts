import { useState, useEffect } from 'react';
export const useDebounce = <T>(value: T, delay = 400): T => {
  const [v, setV] = useState(value);
  useEffect(() => { const id = setTimeout(() => setV(value), delay); return () => clearTimeout(id); }, [value, delay]);
  return v;
};