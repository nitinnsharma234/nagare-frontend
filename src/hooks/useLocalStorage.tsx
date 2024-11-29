import { useState } from "react";

export const useLocalStorage = (keyName: string, defaultValue: string|null) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value) 
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      console.error("Error reading from localStorage:", err);
      return defaultValue;
    }
  });

  const setValue = (newValue: string|null) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (err) {
      console.error("Error writing to localStorage:", err);
    }
  };

  return [storedValue, setValue] as const;
};