import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react"; // icon for sorting
import { SortIcon } from "../../assets/icons/Icons";

const CreditTable = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full overflow-x-auto custom-scrollbar max-h-[1168px] rounded-[4px]">
      <table className="min-w-[300px] w-full">
        <thead className="sticky top-0 z-10 text-left h-[34px] border-b border-[#E0E2E5]">
          <tr className="bg-[#FFF2EE] text-[#6B7271]">
            {columns.map((col) => (
              <th
                key={col.accessor}
                onClick={() => requestSort(col.accessor)}
                className="px-4 py-3 cursor-pointer select-none text-[10px] font-urbanist whitespace-nowrap"
              >
                <div className="flex items-center gap-1">
                  {col.Header}
                  <SortIcon />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="" >
          {sortedData.map((row, i) => (
            <tr
              key={i}
              className="h-14 border-b border-[#E5E6E6] bg-myWhite-color text-[#0A0A0A] text-xs font-urbanist"
            >
              {columns.map((col) => (
                <td key={col.accessor} className="px-4 py-3 whitespace-nowrap">
                  {col.Cell ? col.Cell(row[col.accessor], row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default CreditTable;
