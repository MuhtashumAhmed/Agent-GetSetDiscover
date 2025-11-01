import ImageEnlarge from "../ImageEnlarge";

export default function MessageBubble({ msg }) {
  const currentUserId = "me"; // current user
  const isMe = msg.senderId === currentUserId;

  return (
    <div
      className={`flex mb-2 items-end ${isMe ? "justify-end" : "justify-start"
        }`}
    >
      {/* User Profile Image */}
      {!isMe && (
        <div className="h-[30px] w-[30px] self-baseline rounded-full bg-secondary-background mr-2 "></div>

        // <div className=" self-baseline rounded-full bg-gray-300 mr-2 overflow-hidden flex-shrink-0">
        //   <img
        //     src={msg.avatar || "/default-avatar.png"}

        //     alt="avatar"
        //     className="h-[30px] w-[30px] object-cover"
        //   />
        // </div>
      )}

      <div className="flex flex-col max-w-xs">
        {/* Agar text hai */}
        {msg.text && (
          <div
            className={`px-3 py-3 rounded-lg max-w-[480px] text-[#333E47] font-Poppins text-xs
        ${isMe
                ? "bg-[#FF66002B] self-end"
                : "bg-[#F5F5F5] text-gray-900 self-start"
              }`}
          >
            {msg.text}
          </div>
        )}

        {/* Agar image hai */}
        {msg.image && (
          <div
            className={`p-1 rounded-[4px] bg-[#F5F5F5] overflow-hidden
        ${isMe ? "self-end" : "self-start"}`}
          >
            {/* <img
          src={msg.image}
          alt="chat-media"
          className="w-[156px] h-[156px] object-cover rounded-[4px]"
          loading="lazy"
        /> */}
            <ImageEnlarge
              src={msg.image}
              alt="chat-media"
                className="w-[156px] h-[156px] object-cover rounded-[4px]"
            />
          </div>
        )}

        {/* Timestamp + ticks */}
        <span
          className={`text-[11px] font-Poppins text-[#757D83] mt-1 
      ${isMe ? "flex justify-end gap-x-[4.5px] items-center" : "text-left"}`}
        >
          {new Date(msg.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
          {isMe && (
            <svg
              width="16"
              height="7"
              viewBox="0 0 16 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.3507 1.3573L3.7507 6.8573C3.65718 6.94929 3.53125 7.00084 3.40007 7.00084C3.26889 7.00084 3.14297 6.94929 3.04945 6.8573L0.64945 4.50042C0.602625 4.45438 0.565328 4.39956 0.539689 4.3391C0.514049 4.27864 0.500569 4.21373 0.500018 4.14806C0.499466 4.08239 0.511855 4.01725 0.536475 3.95637C0.561096 3.89549 0.597467 3.84006 0.643512 3.79323C0.689557 3.74641 0.744374 3.70911 0.804832 3.68347C0.865291 3.65783 0.930208 3.64435 0.995876 3.6438C1.06154 3.64325 1.12668 3.65564 1.18756 3.68026C1.24844 3.70488 1.30388 3.74125 1.3507 3.7873L3.40007 5.7998L8.65007 0.643546C8.74472 0.550555 8.87244 0.498971 9.00512 0.500143C9.07082 0.500723 9.13576 0.514238 9.19623 0.539916C9.2567 0.565593 9.31153 0.60293 9.35757 0.649796C9.40362 0.696661 9.43998 0.752137 9.46459 0.813056C9.48919 0.873975 9.50156 0.939143 9.50098 1.00484C9.5004 1.07054 9.48688 1.13548 9.4612 1.19595C9.43553 1.25643 9.39819 1.31125 9.35132 1.3573H9.3507ZM15.3569 0.649796C15.3109 0.602895 15.2561 0.565527 15.1956 0.539827C15.1352 0.514127 15.0702 0.5006 15.0045 0.50002C14.9388 0.499439 14.8736 0.511816 14.8127 0.536444C14.7518 0.561071 14.6963 0.597466 14.6494 0.643546L9.39945 5.7998L8.22257 4.64355C8.12792 4.55064 8.00024 4.49913 7.86762 4.50036C7.735 4.50159 7.6083 4.55546 7.51539 4.65011C7.42248 4.74476 7.37097 4.87244 7.3722 5.00506C7.37344 5.13768 7.4273 5.26439 7.52195 5.3573L9.04882 6.8573C9.14234 6.94929 9.26827 7.00084 9.39945 7.00084C9.53063 7.00084 9.65655 6.94929 9.75007 6.8573L15.3501 1.3573C15.397 1.31131 15.4344 1.25653 15.4602 1.19607C15.4859 1.13562 15.4995 1.07068 15.5002 1.00497C15.5008 0.939262 15.4885 0.874072 15.4639 0.813128C15.4393 0.752185 15.403 0.696683 15.3569 0.649796Z"
                fill="black"
              />
            </svg>
          )}
        </span>
      </div>
    </div>


  );
}
