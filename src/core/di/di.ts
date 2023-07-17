type ContainerConfig = {
  readonly [key: string]: unknown;
};

export const createContainer = <TConfig extends ContainerConfig>(
  config: TConfig
) => {
  return <
    TDeps extends (keyof TConfig)[],
    TFn extends (deps: Pick<TConfig, TDeps[number]>) => unknown
  >(
    fn: TFn
  ): ReturnType<TFn> => {
    return fn(config) as ReturnType<TFn>;
  };
};
