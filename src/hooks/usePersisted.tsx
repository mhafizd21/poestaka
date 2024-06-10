import { useState } from "react";

const usePersisted = <T,>(key: string, initialValue: T): [T, (args: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item && JSON.parse(item) !== null) {
        return JSON.parse(item);
      }
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
      window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default usePersisted;
