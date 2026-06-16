import { useState, useCallback } from 'react';

export function useSearch<T>(data: T[], searchFields: (keyof T)[]): [T[], (query: string) => void] {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((item) =>
    searchFields.some((field) =>
      String(item[field]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return [filteredData, setSearchQuery];
}

export function useFilter<T>(data: T[], filterKey: keyof T, filterValue: any): T[] {
  return data.filter((item) => item[filterKey] === filterValue);
}

export function usePagination<T>(data: T[], itemsPerPage: number = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  }, [totalPages]);

  return {
    currentPage,
    paginatedData,
    totalPages,
    goToPage,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
  };
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
