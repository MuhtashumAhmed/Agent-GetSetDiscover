import React, { useEffect, useMemo, useState } from 'react'
import VoucherCard from '../../../components/vouchers/VoucherCard'
import { BlueTwoMenIcon, PlusIcon, TwoMenIcon } from '../../../assets/icons/Icons';
import Button from '../../../components/Button';
import DateIconInput from '../../../components/DateInput';
import VoucherTable from '../../../components/vouchers/VoucherTable';
import Pagination from '../../../components/Pagination';
import { vouchersData } from "../../../dummyData/VouchertableData";
import { Link, useNavigate } from 'react-router-dom';


export const voucherCardData = [
  {
    icon: <TwoMenIcon />,
    text: "Active Voucher",
    value: "200",
    bgColor: "bg-[#FCDCDC]",
  },
  {
    icon: <TwoMenIcon />,
    text: "On Trip",
    value: "150",
    bgColor: "bg-[#FCDCDC]",
  },
  {
    icon: <BlueTwoMenIcon />,
    text: "Voucher Created",
    value: "5.4K",
    bgColor: "bg-[#DCFCE7]",
  },
  {
    icon: <TwoMenIcon />,
    text: "Total Amount",
    value: "Rs. 895,000",
    bgColor: "bg-[#FCDCDC]",
  },
];


const AllVouchers = () => {
  const navigate = useNavigate()
  // ===== Search =====
  const [searchTerm, setSearchTerm] = useState("");
  // ===== Date Filter =====
  const [selectedDate, setSelectedDate] = useState(null);

  // ===== Pagination =====
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  // ===== Filtered Data (Search + Date) =====
  const filteredData = useMemo(() => {
    let data = vouchersData;

    // search filter
    if (searchTerm.trim()) {
      data = data.filter(
        (voucher) =>
          voucher.voucherNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          voucher.hoodTraveler.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // date filter
    if (selectedDate) {
      const target = new Date(selectedDate).setHours(0, 0, 0, 0);
      data = data.filter((voucher) => {
        const start = new Date(voucher.startDate).setHours(0, 0, 0, 0);
        const end = new Date(voucher.endDate).setHours(0, 0, 0, 0);
        return target >= start && target <= end; // ✅ falls within trip duration
      });
    }

    return data;
  }, [searchTerm, selectedDate]);

  // ===== Pagination with filtered data =====
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / resultsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * resultsPerPage;
    return filteredData.slice(start, start + resultsPerPage);
  }, [filteredData, currentPage, resultsPerPage]);

  // Reset page when search or date changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedDate]);

  return (
    <div className='flex flex-col gap-[22px] p-2 md:p-0 '>

      {/* top cards */}
      <div className="flex-1 flex justify-center md:justify-normal flex-wrap items-center gap-5">
        {voucherCardData?.map((d, i) => (
          <VoucherCard
            key={i}
            icon={d.icon}
            text={d.text}
            value={d.value}
            bgColor={d.bgColor}
          />
        ))}
      </div>

      {/* ----- searching and filtering ------*/}
      <div className='p-2  sm:p-4 bg-myWhite-color rounded-[25px] w-[95dvw] sm:w-full overflow-hidden '>
        <div className="flex flex-wrap gap-[10px]">
          {/* ----- searching ------*/}
          <div className="flex items-center bg-[#F5F5F5] rounded-[6px] px-3 h-[30px] flex-1">
            <img src="/search.png" alt="" />
            <input
              type="text"
              placeholder="Search by Voucher ID OR Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent ml-[6px] outline-none flex-1 text-[11px] font-Poppins text-[#868F9B]"
            />
          </div>

          {/* --- calendar filtering ----- */}
          <div className="text-sm">
            <DateIconInput
              onChange={(date) => {
                setSelectedDate(date); // store selected date
              }}
              text="Last 7 Days"
              className='w-[105px] text-[#4C596A] text-xs bg-[#F5F5F5] rounded-[6px] h-[30px]'
            />
          </div>

          {/* ---- create button ---- */}
          <div>
            <div className="flex">
              <Link className="cursor-pointer bg-[#007AFC] text-myWhite-color w-[140px] h-[30px] text-[12px] rounded-[6px] flex items-center justify-center font-Poppins px-2"
                // onClick={() => navigate("/dashboard/voucher/created-voucher")}
                onClick={() => window.open("/dashboard/voucher/created-voucher", "_blank")}

              >
                <PlusIcon />
                <p className='ml-1'>Create Voucher</p>
              </Link>
            </div>
          </div>
        </div>

        {/* table */}
        <div className='mt-5 bg-myWhite-color  sm:w-lg md:w-full'>
          {
            paginatedData?.length > 0 ? (
              <VoucherTable vouchers={paginatedData} />
            ) : (
              <h2 className='text-center text-gray-400 font-Poppins text-xs'>No Data Found</h2>
            )
          }
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          resultsPerPage={resultsPerPage}
          onResultsPerPageChange={setResultsPerPage}
        />
      </div>
    </div>
  )
}

export default AllVouchers
