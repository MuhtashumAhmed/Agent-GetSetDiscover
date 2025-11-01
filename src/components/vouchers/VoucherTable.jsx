import { useState, useMemo } from "react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import { EyeIcon, PrintIcon, SortIcon } from "../../assets/icons/Icons";


const headers = [
    { key: "voucherNo", label: "Voucher #" },
    { key: "hoodTraveler", label: "Head Traveler" },
    { key: "type", label: "Type" },
    { key: "travelDates", label: <>Travel Start Date<br />And End Date</> },
    { key: "numberOfCountry", label: "Number of Country" },
    { key: "members", label: "Members" },
    { key: "group", label: "Group" }, // ✅ allow sort
    { key: "status", label: "Status" }, // ✅ allow sort
    { key: "actions", label: "Actions" }, // ❌ no sort
];


export default function VoucherTable({ vouchers }) {
    const [sortKey, setSortKey] = useState(null);
    const [sortDir, setSortDir] = useState("asc");

    // only allow sorting on `group` & `status` (change keys or add key for sorting)
    const sortableColumns = ["group", "status"];

    const toggleSort = (key) => {
        if (!sortableColumns.includes(key)) return; // only group & status
        if (sortKey !== key) {
            setSortKey(key);
            setSortDir("asc");
        } else {
            setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
        }
    };

    const sorted = useMemo(() => {
        if (!sortKey) return vouchers;
        const copied = [...vouchers];
        copied.sort((a, b) => {
            const valA = a[sortKey];
            const valB = b[sortKey];
            if (valA === valB) return 0;
            const order = valA > valB ? 1 : -1;
            return sortDir === "asc" ? order : -order;
        });
        return copied;
    }, [sortKey, sortDir, vouchers]);

    const arrow = (key) => {
        if (!sortableColumns.includes(key)) return null;

        if (sortKey !== key) {
            // default unsorted state but still show neutral SortIcon
            return <SortIcon className="opacity-50" />;
        }

        if (sortDir === "asc") {
            return <SortIcon className="rotate-180 transition-transform" />; // example flipped
        }

        if (sortDir === "desc") {
            return <SortIcon className="transition-transform" />;
        }
    };

    return (
        // <div className="custom-scrollbar overflow-x-auto max-h-[625px]    ">
        <div className="custom-scrollbar overflow-x-auto max-h-[750px]    ">
            <table className="w-full  divide-y divide-gray-200 text-sm">
                <thead className=" bg-[#FFE4D1] sticky top-0 text-[10px] font-urbanist text-[#6B7271] text-left">
                    <tr>
                        {headers.map(({ key, label }) => (
                            <th
                                key={key}
                                onClick={() => toggleSort(key)}
                                className={`px-4 py-3 select-none ${key === "group" || key === "status" ? "cursor-pointer" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-1">
                                    <span>{label}</span>
                                    {(key === "group" || key === "status") && (
                                        <span className="text-gray-400">{arrow(key)}</span>
                                    )}
                                </div>
                            </th>

                        ))}
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 font-urbanist font-semibold text-[10px]">
                    {sorted.map((v, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-[#242E2C] font-semibold">
                                {v.voucherNo}
                            </td>
                            <td className="px-4 py-3">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-[#242E2C] ">{v.hoodTraveler}</span>
                                    <span className="text-xs text-[#6B7271]">{v.phone}</span>
                                </div>
                            </td>
                            <td className="px-4 py-3">
                                <span
                                    className={`w-max py-[3px] px-[6px] rounded-[5px] font-urbanist font-semibold text-[10px] text-white ${v.type === "Created" ? "bg-[#0059FF]" : "bg-[#DD00FF]"
                                        }`}
                                >
                                    {v.type}
                                </span>
                            </td>
                            <td className="px-4 py-3 text-[#242E2C] ">
                                <div className="flex flex-col font-semibold text-[10px] text-nowrap ">
                                    <span>Start: {v.startDate}</span>
                                    <span>End: {v.endDate}</span>
                                </div>
                            </td>
                            <td className="px-4 py-3 text-[#242E2C]  ">{v.numberOfCountry}</td>
                            <td className="px-4 py-3 text-[#242E2C] ">{v.members}</td>
                            <td className="px-4 py-3 text-[#242E2C] ">{v.group}</td>
                            <td className="px-4 py-3 text-[#242E2C] ">
                                <span
                                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${v.status === "Pending" &&
                                        "bg-[#BBF49C] text-[#1E4841] font-normal text-[10px]"
                                        }`}
                                >
                                    {v.status}
                                </span>
                            </td>
                            <td className="px-4 py-6 text-right flex items-center gap-3  ">
                                <button className="text-indigo-600 hover:text-indigo-900">
                                    <EyeIcon />
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                    <PrintIcon />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
