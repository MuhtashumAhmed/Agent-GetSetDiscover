import { useState } from "react";
import Button from "../../components/Button";
import CustomDropDownSelect from "../../components/CustomDropDownSelect";
import DateIconInput from "../../components/DateInput";
import Card from "../../components/history/Card";
import { bookings as initialBookings } from "../../dummyData/HistoryData";

const tabConfig = {
  Reserve: "reserved",
  Vouchers: "voucher",
  Cancel: "cancelled",
};

const cuntryFilter = [
  { value: "pk", label: "Pakistan" },
  { value: "qa", label: "Qatar" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "uae", label: "UAE" },
];

const topNavigators = Object.keys(tabConfig);

const History = () => {
  const [activeTab, setActiveTab] = useState("Reserve");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // 👇 bookings ko state me rakha
  const [bookings, setBookings] = useState(initialBookings);

  // 👇 cancel handler
  const handleCancelBooking = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "cancelled" } : b
      )
    );
    // setActiveTab("Cancel"); // ✅ tab auto switch
  };

  // 👇 voucher handler (optional)
  const handleMoveToVoucher = (id) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: "voucher" } : b
      )
    );
    // setActiveTab("Vouchers");
  };

  const filteredData = bookings.filter((item) => {
    const matchesTab = item.status === tabConfig[activeTab];
    const matchesSearch =
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.guestName.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesDate = true;
    if (selectedDate) {
      try {
        const currentYear = new Date().getFullYear();
        const checkInDate = new Date(`${item.checkIn} ${currentYear}`);
        const checkOutDate = new Date(`${item.checkOut} ${currentYear}`);
        matchesDate =
          selectedDate >= checkInDate && selectedDate <= checkOutDate;
      } catch (err) {
        console.error("Date parse error:", err);
        matchesDate = false;
      }
    }

    return matchesTab && matchesSearch && matchesDate;
  });

  return (
    <div className="mt-0  ">
      {/* Tabs */}
      <div className="flex items-center gap-x-[5px] w-max h-[42.8px] rounded-[100px] py-[5px] px-[5px] bg-[#FFFFFF]">
        {topNavigators.map((btn, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(btn)}
            className={`w-max h-[31px] rounded-[18px] px-[18px] flex items-center justify-center font-manrope text-sm transition-colors ${activeTab === btn
              ? "bg-[#FF6600] text-[#FFFFFF]"
              : "bg-[#F5F5F5] text-[#838383] hover:bg-[#E5E5E5]"
              }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Data */}
      <div className={`bg-myWhite-color p-4 rounded-[25px] mt-5 ${(searchQuery.length > 0 || selectedDate) && "min-h-screen"}  w-[95dvw]     sm:w-full `}>
        {/* search + filter */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center bg-[#F5F5F5] rounded-[18px] px-3 h-[36px] flex-1">
            <img src="/search.png" alt="search" />
            <input
              type="text"
              placeholder="Search by ID or Guest Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent ml-[6px] outline-none flex-1 text-[11px] font-Poppins text-[#868F9B]"
            />
          </div>

          <div className="w-16 text-sm">
            <DateIconInput
              selectedDate={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              text="Date"
            />
          </div>

          <div className="w-[83px] text-[10px]">
            <CustomDropDownSelect
              data={cuntryFilter}
              placeholder={"Country"}
              bgColor="#FFFFFF"
            />
          </div>
        </div>

        {/* Data list */}
        <div className="custom-scrollbar mt-6 gap-4 flex flex-wrap max-h-[750px] overflow-auto  ">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <div key={index} className={`${searchQuery.length > 0 ? "flex-none" : "flex-1"}   `}>
                <Card
                  data={data}
                  setActiveTab={setActiveTab}
                  onCancel={handleCancelBooking}    //  pass cancel handler
                  onMoveToVoucher={handleMoveToVoucher} //  pass voucher handler
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 font-Poppins text-center w-full">No records found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
