import { useState, useCallback, useEffect } from "react";

export function useTransaction<T extends unknown[]>(
  transactionFunction: (...params: T) => Promise<void>,
  dependencies: unknown[]
): [(...params: T) => Promise<void>, any] {
  const [status, setStatus] = useState<any>("IDLE");

  useEffect(() => {
    if (status === "CONFIRMED" || status === "FAILED") {
      const timeout = setTimeout(() => {
        setStatus("IDLE");
      }, 2600);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const transaction = useCallback(
    async (...args: T) => {
      try {
        setStatus("PENDING");
        await transactionFunction(...args);
        setStatus("CONFIRMED");
      } catch (error: unknown) {
        setStatus("FAILED");
        throw new Error(`useTransaction(${args}) ${error}`);
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [transactionFunction, ...dependencies]
  );

  return [transaction, status];
}
