import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);
    const isClient = typeof window !== 'undefined';

    useEffect(() => {
        if (!isClient) return;

        const storedValue = localStorage.getItem(item);
        if (storedValue) {
            setValue(JSON.parse(storedValue));
        }
    }, [item, isClient]);

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        if (isClient) {
            localStorage.setItem(item, JSON.stringify(newValue));
        }
    };

    return {
        value,
        updateLocalStorage
    };
}
