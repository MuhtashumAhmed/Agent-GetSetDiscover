import { useState } from "react";
import ChatWindow from "../../components/helpdesk/ChatWindow";

const mockUsers = [
  
  {
    chatId: "c3",
    participants: [
      {
        userId: "u3",
        name: "George Clark",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        userId: "me",
        name: "You",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
      },
    ],
    lastMessage: {
      id: "m10",
      senderId: "u3",
      text: "Lorem ipsum dolor...",
      timestamp: "2025-08-22T09:37:00Z",
    },
    unreadCount: 0,
  },
];

const mockMessages = [
  

  {
    id: "m1",
    chatId: "c3",
    senderId: "u3",
    text: "Hey! Are we still on for tonight?",
    timestamp: "2025-08-22T09:30:00Z",
    readBy: ["u3"],
  },
  {
    id: "m2",
    chatId: "c3",
    senderId: "me",
    text: "Yep, everything’s good 👍",
    timestamp: "2025-08-22T09:32:00Z",
    readBy: ["me"],
  },
  {
    id: "m3",
    chatId: "c3",
    senderId: "u3",
    text: "Cool, I’ll bring some drinks 🥤",
    timestamp: "2025-08-22T09:33:00Z",
    readBy: ["u3"],
  },
  {
    id: "m4",
    chatId: "c3",
    senderId: "me",
    text: "Nice! I’ll grab some chips 🍟",
    timestamp: "2025-08-22T09:35:00Z",
    readBy: ["me"],
  },
  {
    id: "m5",
    chatId: "c3",
    senderId: "u3",
    text: "Do you have the tickets?",
    timestamp: "2025-08-22T09:36:00Z",
    readBy: ["u3"],
  },
  {
    id: "m6",
    chatId: "c3",
    senderId: "me",
    image: "https://picsum.photos/200/300?random=10",
    timestamp: "2025-08-22T09:37:00Z",
    readBy: ["me"],
  },
  {
    id: "m7",
    chatId: "c3",
    senderId: "u3",
    text: "Perfect, we’re set then 🎟️",
    timestamp: "2025-08-22T09:39:00Z",
    readBy: ["u3"],
  },
  {
    id: "m8",
    chatId: "c3",
    senderId: "me",
    text: "By the way, what time should I pick you up?",
    timestamp: "2025-08-22T09:40:00Z",
    readBy: ["me"],
  },
  {
    id: "m9",
    chatId: "c3",
    senderId: "u3",
    text: "Around 6:30 works for me.",
    timestamp: "2025-08-22T09:41:00Z",
    readBy: ["u3"],
  },
  {
    id: "m10",
    chatId: "c3",
    senderId: "me",
    text: "Got it. Don’t be late 😆",
    timestamp: "2025-08-22T09:43:00Z",
    readBy: ["me"],
  },
  {
    id: "m11",
    chatId: "c3",
    senderId: "u3",
    image: "https://picsum.photos/200/300?random=11",
    timestamp: "2025-08-22T09:44:00Z",
    readBy: ["u3"],
  },
  {
    id: "m12",
    chatId: "c3",
    senderId: "me",
    text: "Haha nice pic 😄",
    timestamp: "2025-08-22T09:45:00Z",
    readBy: ["me"],
  },
  {
    id: "m13",
    chatId: "c3",
    senderId: "u3",
    text: "Thanks! Just testing my new phone camera 📱",
    timestamp: "2025-08-22T09:46:00Z",
    readBy: ["u3"],
  },
  {
    id: "m14",
    chatId: "c3",
    senderId: "me",
    text: "Looks sharp! You’ll be our official photographer tonight 📸",
    timestamp: "2025-08-22T09:48:00Z",
    readBy: ["me"],
  },
  {
    id: "m15",
    chatId: "c3",
    senderId: "u3",
    text: "Deal! See you at 6:30 🚗",
    timestamp: "2025-08-22T09:50:00Z",
    readBy: ["u3"],
  },
  {
    id: "m16",
    chatId: "c3",
    senderId: "me",
    text: "See ya 👋",
    timestamp: "2025-08-22T09:52:00Z",
    readBy: ["me"],
  },
];

const HelpDesk = () => {
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const [messages, setMessages] = useState(mockMessages);
  const handleSendMessage = (newMsg) => {
    const msg = {
      id: Date.now().toString(),
      chatId: selectedUser.chatId, // 👈 jis chat me ho uska ID
      senderId: "me", // 👈 "me" rakhna for current user
      text: newMsg,
      timestamp: new Date().toISOString(),
      readBy: ["me"],
    };
    setMessages((prev) => [...prev, msg]);
  };
  return (
    <div className="p-2 md:p-0 -mt-4 mb-4 md:mb-0  " >
      <ChatWindow
        user={selectedUser}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default HelpDesk;
