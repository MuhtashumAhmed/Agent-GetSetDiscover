import React, { useState } from "react";

const dataArray = [
  { date: "2024-09-24 - 14:30", email: "alexallen2005@gmail.com", status: "Pending", credits: 25 },
  { date: "2024-09-22 - 11:00", email: "johndoe@gmail.com", status: "Pending", credits: 25 },
  { date: "2024-09-21 - 09:15", email: "janesmith@gmail.com", status: "Pending", credits: 25 },
  { date: "2024-09-21 - 09:15", email: "janesmith@gmail.com", status: "Pending", credits: 25 },
  { date: "2024-09-21 - 09:15", email: "janesmith@gmail.com", status: "Pending", credits: 25 },
];

// ✅ your custom sort icon component
const SortIcon = ({ active, direction }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`ml-1 inline transition-transform duration-200 ${
      active ? (direction === "ascending" ? "rotate-180" : "rotate-0") : "opacity-50"
    }`}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.85983 7.49655C4.00628 7.35011 4.24372 7.35011 4.39017 7.49655L6 9.10639L7.60984 7.49655C7.75628 7.35011 7.99372 7.35011 8.14016 7.49655C8.28661 7.643 8.28661 7.88044 8.14016 8.02688L6.26516 9.90188C6.11872 10.0483 5.88128 10.0483 5.73484 9.90188L3.85983 8.02688C3.71339 7.88044 3.71339 7.643 3.85983 7.49655Z"
      fill="#6B7271"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.85983 5.77688C4.00628 5.92333 4.24372 5.92333 4.39017 5.77688L6 4.16705L7.60984 5.77688C7.75628 5.92333 7.99372 5.92333 8.14016 5.77688C8.28661 5.63044 8.28661 5.393 8.14016 5.24655L6.26516 3.37155C6.11872 3.22511 5.88128 3.22511 5.73484 3.37155L3.85983 5.24655C3.71339 5.393 3.71339 5.63044 3.85983 5.77688Z"
      fill="#6B7271"
    />
  </svg>
);

const EarnRewardsTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  const sortedData = React.useMemo(() => {
    let sortableItems = [...dataArray];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "ascending" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="custom-scrollbar overflow-x-auto w-full ">
      <table className="w-full">
        <thead className="bg-[#FFF6F6] text-left h-[37px] sticky top-0 text-[#6B7271] text-[10px] font-urbanist">
          <tr>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => requestSort("date")}
            >
              Date & Time
              <SortIcon active={sortConfig.key === "date"} direction={sortConfig.direction} />
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => requestSort("email")}
            >
              Email
              <SortIcon active={sortConfig.key === "email"} direction={sortConfig.direction} />
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => requestSort("status")}
            >
              Status
              <SortIcon active={sortConfig.key === "status"} direction={sortConfig.direction} />
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => requestSort("credits")}
            >
              Credits
              <SortIcon active={sortConfig.key === "credits"} direction={sortConfig.direction} />
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-[#FFFFFF] text-xs font-urbanist text-[#242E2C]">
          {sortedData.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-3 whitespace-nowrap">{item.date}</td>
              <td className="px-4 whitespace-nowrap">{item.email}</td>
              <td className="px-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.status === "Pending"
                      ? "bg-red-100 text-red-600"
                      : item.status === "Approved"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="px-4 text-green-600 font-semibold">{item.credits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EarnRewardsTable;
