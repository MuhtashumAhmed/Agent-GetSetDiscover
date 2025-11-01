const notificationStyles = {
  Purchase: "bg-[#BBF49C] text-[#1E4841]",
  Signup: "bg-[#fdced1] text-[#CB30E0]",
  Ticket: "bg-[#FDCED1] text-[#F73541]",
};

const NotificationPopup = ({ notifications, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose} // overlay click => close
      ></div>

      {/* Popup */}
      <div className=" absolute -right-4 sm:right-4 md:right-0 mt-4 md:mt-2   bg-[#FFFFFF] rounded-[20px] shadow-lg z-50">
        <ul className="  max-w-[280px] w-full  sm:max-w-[350px] overflow-y-auto flex flex-col p-2 ms:p-[10px] gap-y-3">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div
                key={n.id}
                className="h-[80px] w-[250px] sm:w-[280px] max-w-[330px] p-2 sm:p-[10px] rounded-2xl flex justify-between bg-[#FFE4D2]"
              >
                {/* left div */}
                <div className="flex gap-x-2">
                  <figure className="h-[54px] w-[54px] flex justify-center items-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small_2x/profile-icon-design-free-vector.jpg"
                      className=" h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] rounded-full border-2 border-orange-500"
                    />
                  </figure>
                  <div className="flex flex-col gap-y-[2px]">
                    <h3 className="text-xs font-Poppins text-[#14191F]">
                      {n.user}
                    </h3>
                    <p className="text-[#242E2C] font-manrope text-[10px] font-medium">
                      {n.title}
                    </p>
                    <span className="text-[8px] font-Poppins text-[#14191FB2]">
                      {n.date}
                    </span>
                  </div>
                </div>

                {/* right div */}
                <div className="flex flex-col justify-between">
                  <i className="justify-items-end">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L8 8" stroke="#FF8282" strokeWidth="2" />
                      <path
                        d="M8.00049 1L1.00049 8"
                        stroke="#FF8282"
                        strokeWidth="2"
                      />
                    </svg>
                  </i>
                  <span
                    className={`w-16 h-6 text-xs font-urbanist text-center leading-6 rounded-[6px] font-regular ${
                      notificationStyles[n.action] ||
                      "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {n.action}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-gray-500 text-center">
              No notifications
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default NotificationPopup;
