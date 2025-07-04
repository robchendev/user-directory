import { useEffect, useState } from "react";

export const useSearchFilter = <T>(
  data: T[] | null | undefined,
  filterFn: (item: T, search: string) => boolean
) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<T[]>([]);

  useEffect(() => {
    if (!data) return;
    if (search) {
      setFilteredData(data.filter((item: T) => filterFn(item, search)));
    } else {
      setFilteredData(data);
    }
  }, [data, search, filterFn]);

  return {
    search,
    setSearch,
    filteredData,
  };
};
