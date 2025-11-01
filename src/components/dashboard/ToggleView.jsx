export default function ToggleView({ setView, view }) {
  // const [view, setView] = useState("list"); // default "list"

  return (
    <div className="inline-flex items-center bg-[#F7F9FB] p-1  border border-gray-200 rounded-[12px] ">
      {/* Calendar Button */}
      <button
        onClick={() => setView("calendar")}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition
          ${
            view === "calendar"
              ? "bg-white shadow text-gray-900 border border-gray-200"
              : "text-gray-500 hover:text-gray-700"
          } font-Poppins text-[10px] text-[#19191C] `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 8.69792H2.5M13.3333 2.03125V5.36458M6.66667 2.03125V5.36458M6.5 18.6979H13.5C14.9001 18.6979 15.6002 18.6979 16.135 18.4254C16.6054 18.1858 16.9878 17.8033 17.2275 17.3329C17.5 16.7981 17.5 16.098 17.5 14.6979V7.69792C17.5 6.29779 17.5 5.59772 17.2275 5.06294C16.9878 4.59254 16.6054 4.21008 16.135 3.9704C15.6002 3.69792 14.9001 3.69792 13.5 3.69792H6.5C5.09987 3.69792 4.3998 3.69792 3.86502 3.9704C3.39462 4.21008 3.01217 4.59254 2.77248 5.06294C2.5 5.59772 2.5 6.29779 2.5 7.69792V14.6979C2.5 16.098 2.5 16.7981 2.77248 17.3329C3.01217 17.8033 3.39462 18.1858 3.86502 18.4254C4.3998 18.6979 5.09987 18.6979 6.5 18.6979Z"
            stroke="#818898"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/* Text sirf active pe show hoga */}
        {view === "calendar" && <span>Calendar View</span>}
      </button>

      {/* List Button */}
      <button
        onClick={() => setView("list")}
        className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md transition
          ${
            view === "list"
              ? "bg-white shadow text-gray-900 border border-gray-200"
              : "text-gray-500 hover:text-gray-700"
          } font-Poppins text-[10px] text-[#19191C] `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 10.3646L7.5 10.3646M17.5 5.36458L7.5 5.36458M17.5 15.3646L7.5 15.3646M4.16667 10.3646C4.16667 10.8248 3.79357 11.1979 3.33333 11.1979C2.8731 11.1979 2.5 10.8248 2.5 10.3646C2.5 9.90435 2.8731 9.53125 3.33333 9.53125C3.79357 9.53125 4.16667 9.90435 4.16667 10.3646ZM4.16667 5.36458C4.16667 5.82482 3.79357 6.19792 3.33333 6.19792C2.8731 6.19792 2.5 5.82482 2.5 5.36458C2.5 4.90435 2.8731 4.53125 3.33333 4.53125C3.79357 4.53125 4.16667 4.90435 4.16667 5.36458ZM4.16667 15.3646C4.16667 15.8248 3.79357 16.1979 3.33333 16.1979C2.8731 16.1979 2.5 15.8248 2.5 15.3646C2.5 14.9043 2.8731 14.5312 3.33333 14.5312C3.79357 14.5312 4.16667 14.9043 4.16667 15.3646Z"
            stroke="#19191C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/* Text sirf active pe show hoga */}
        {view === "list" && <span>List View</span>}
      </button>
    </div>
  );
}
