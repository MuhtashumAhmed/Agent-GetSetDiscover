export default function ListView({ data }) {
  if (!data || data.length === 0)
    return <p className="text-center p-4">No data available</p>;

  // Get table headers dynamically from keys of the first item
  const headers = Object.keys(data[0]);

  return (
    // <div className="border overflow-x-auto">
    // <div className=" overflow-x-auto w-[5%] max-h-[625px] rounded-lg ">
    // <div className=" overflow-x-auto sm:w-[100%] lg:w-[90%] mx-auto xl:w-[100%] max-h-[625px] rounded-lg ">
    <div className=" overflow-x-auto  sm:w-[100%] lg:w-[100%] mx-auto xl:w-[97%] max-h-[625px]   ">

      {/* <table className="min-w-full border-collapse text-sm"> */}
      <table className=" w-full  text-sm">
        <thead className="bg-[#FFE4D1] sticky top-0 text-left h-[34px] border-b border-[#E0E2E5]">
          <tr>
            {headers.map((key) => (
              <th
                key={key}
                className="px-3 lg:px-6 text-[10px] text-[#6B7271] font-urbanist whitespace-nowrap"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white text-sm">
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {headers.map((key) => (
                <td
                  key={key}
                  className="px-3 lg:px-6 py-4 border-b border-gray-200 font-urbanist text-[#242E2C] font-semibold text-[10px] whitespace-nowrap"
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
