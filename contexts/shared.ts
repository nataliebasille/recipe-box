export type DomainResult<T> =
  | {
      type: "ok";
      value: T;
    }
  | {
      type: "failure";
      error: string;
    };

export const ok = <T>(value: T): DomainResult<T> => ({
  type: "ok",
  value,
});

export const failure = <T>(error: string): DomainResult<T> => ({
  type: "failure",
  error,
});

export type Maybe<T> =
  | {
      type: "some";
      value: T;
    }
  | {
      type: "none";
    };

export const some = <T>(value: T): Maybe<T> => ({
  type: "some",
  value,
});

export const none = <T>(): Maybe<T> => ({
  type: "none",
});

export type FindEntityById<TId, TEntity> = (id: TId) => Promise<Maybe<TEntity>>;
export type AddEntity<TEntity> = (entity: TEntity) => Promise<void>;
export type UserId = string & { readonly __brand?: "UserId" };
