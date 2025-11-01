import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

export default function ChatWindow({ user, messages, onSendMessage }) {
  // "me" ke alawa wala user dhoondo

  // console.log(messages);

  const otherUser = user?.participants?.find((p) => p.userId !== "me");

  return (
    <div
      className="w-full flex-1 flex flex-col bg-white rounded-lg mt-8 mb-4 "
      style={{ height: "calc(100vh - 170px)" }}
    >
      {/* Header */}
      <div className="flex items-center space-x-[13px] p-4 bg-[#FFFFFF] rounded-t-[8px]">
        {/* profile */}
        <div className="h-12 w-12 rounded-full bg-secondary-background grid place-content-center "></div>
        <div className="">
          <h2 className="font-Poppins text-sm text-[#14191F] font-medium ">
            {otherUser?.name || "Select a chat"}
          </h2>
          <p className="text-xs text-[#868F9B] font-Poppins ">
            {otherUser ? "Online" : ""}
          </p>
        </div>
      </div>
      <hr className="w-[98%]  mx-auto  text-[#E0E2E5]  " />

      {/* Messages */}
      <div className="custom-scrollbar flex-1  overflow-y-auto p-4 space-y-3 bg-[#FFFFFF] overflow-hidden">
        {messages
          .filter((msg) => msg.chatId === user?.chatId) // sirf selected chat ke msgs dikhao
          .map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}
      </div>

      {/* Input */}
      <div>{user && <ChatInput onSendMessage={onSendMessage} />}</div>
    </div>
  );
}
