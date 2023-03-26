import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

export const createStore = <TStore extends {}>(initialValue: TStore) => {
  const StoreContext = createContext<
    | {
        get: () => TStore;
        set: (changes: Partial<TStore>) => void;
        subscribe: (callback: (newValue: TStore) => void) => () => void;
      }
    | undefined
  >(undefined);

  const Provider: FC<{ initialValue?: TStore; children: ReactNode }> = ({
    initialValue: initialValueOverride,
    children,
  }) => {
    const store = useRef(initialValueOverride ?? initialValue);
    const subscriptions = useRef<Set<(newValue: TStore) => void>>();
    if (!subscriptions.current) {
      subscriptions.current = new Set();
    }

    const get = useCallback(() => store.current, []);
    const set = useCallback((changes: Partial<TStore>) => {
      store.current = {
        ...store.current,
        ...changes,
      };
      subscriptions.current?.forEach((callback) => {
        callback(store.current);
      });
    }, []);
    const subscribe = useCallback((callback: (newValue: TStore) => void) => {
      subscriptions.current?.add(callback);
      return () => subscriptions.current?.delete(callback);
    }, []);
    const contextValue = useMemo(() => {
      return {
        get,
        set,
        subscribe,
      };
    }, [get, set, subscribe]);

    return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
  };

  const useStore = () => {
    const store = useContext(StoreContext);

    if (!store) {
      throw new Error("StoreProvider is missing");
    }

    return store;
  };

  const useSelector = <TData,>(selector: (store: TStore) => TData) => {
    const store = useStore();
    const selectorRef = useRef(selector);
    const [value, setValue] = useState(() => selectorRef.current(store.get()));

    useEffect(() => {
      return store.subscribe((value) => {
        setValue(selectorRef.current(value));
      });
    }, []);

    return value;
  };

  const useSetStore = () => {
    const store = useStore();

    return store.set;
  };

  return [useSelector, useSetStore, Provider] as const;
};
