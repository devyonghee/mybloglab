import { useCallback, useEffect } from 'react';

const useMountEffect = (func: () => any) => {
  return useEffect(func, []);
};

const useMountCallback = (func: (...param: any) => any) => {
  return useCallback(func, []);
};

export { useMountEffect, useMountCallback };
