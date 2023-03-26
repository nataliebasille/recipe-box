import { useCallback, useState } from "react";
import superjson from "superjson";

export function useLocalStorageState<T>(key: string): [T | undefined, (value: T) => void];
export function useLocalStorageState<T>(key: string, defaultValue: T): [T, (value: T) => void];
export function useLocalStorageState(key: string, defaultValue?: unknown) {
  const [value, setValue] = useState(() => getFromStorage(key, defaultValue));

  const updateValue = useCallback((value: unknown) => {
    setInStorage(key, value);
    setValue(value);
  }, []);

  return [value, updateValue] as const;
}

function getFromStorage(key: string, defaultValue: unknown) {
  const value = localStorage.getItem(key);

  if (value === null) {
    return defaultValue;
  }

  return superjson.deserialize(JSON.parse(value));
}

function setInStorage(key: string, value: unknown) {
  const serialized = superjson.serialize(value);

  localStorage.setItem(key, JSON.stringify(serialized));
}
