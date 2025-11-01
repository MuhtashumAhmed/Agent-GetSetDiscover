import { useRef, useEffect, useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { GoPaperclip } from "react-icons/go";
import EmojiPicker from "emoji-picker-react";
import { EmojiIcon } from "../../assets/icons/Icons";
import { FaFileAlt, FaImage } from "react-icons/fa";

export default function ChatInput({ onSendMessage }) {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const emojiPickerRef = useRef(null);
  const attachMenuRef = useRef(null);

  // file input refs
  const fileInputRef = useRef(null);
  const mediaInputRef = useRef(null);

  const handleSend = () => {
    if (text.trim() !== "") {
      onSendMessage(text);
      setText("");
    }
  };

  const handleEmojiClick = (emojiData) => {
    setText((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  // outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
      if (
        attachMenuRef.current &&
        !attachMenuRef.current.contains(event.target)
      ) {
        setShowAttachmentMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // file handlers
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("📄 Document uploaded:", file);
      // you can call onSendMessage(file) or handle upload logic here
    }
  };

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("🖼️ Media uploaded:", file);
    }
  };

  return (
    <div className="p-4 rounded-lg bg-white relative">
      <div className="flex items-center bg-[#F5F5F5] h-[52px] relative">
        {/* emoji button */}
        <button
          type="button"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="text-[#4C596A] pl-4 pr-1.5 py-2 rounded-lg cursor-pointer"
        >
          <EmojiIcon />
        </button>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 outline-none text-[#868F9B] text-[12px] font-Poppins"
        />

        {/* attachment button */}
        <div className="relative" ref={attachMenuRef}>
          <button
            type="button"
            onClick={() => setShowAttachmentMenu((prev) => !prev)}
            className="ml-[23px] text-[#4C596A] px-4 py-2 rounded-lg cursor-pointer"
          >
            <GoPaperclip />
          </button>

          {/* attachment menu */}
          {showAttachmentMenu && (
            <div className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg w-44 z-50 overflow-hidden">
              {/* Document */}
              <button
                onClick={() => fileInputRef.current.click()}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm text-[#4C596A]"
              >
                <FaFileAlt className="text-blue-500" /> Document
              </button>

              {/* Photos & Videos */}
              <button
                onClick={() => mediaInputRef.current.click()}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-sm text-[#4C596A]"
              >
                <FaImage className="text-green-500" /> Photos & Videos
              </button>
            </div>
          )}

          {/* hidden inputs */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx,.txt"
          />
          <input
            type="file"
            ref={mediaInputRef}
            style={{ display: "none" }}
            onChange={handleMediaUpload}
            accept="image/*,video/*"
          />
        </div>

        {/* send button */}
        <button
          onClick={handleSend}
          className="bg-[#0D0D0C80] cursor-pointer flex items-center justify-center h-[36px] w-[36px] text-white rounded-lg"
        >
          <LuSendHorizontal className="text-[#F5F5F5]" />
        </button>
      </div>

      {/* Emoji picker dropdown */}
      {showEmojiPicker && (
        <div
          ref={emojiPickerRef}
          className="absolute bottom-16 left-4 z-50 w-[280px] h-[300px] rounded-lg shadow-lg overflow-hidden"
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            width="100%"
            height="100%"
            searchDisabled={true}
            previewConfig={{ showPreview: false }}
          />
        </div>
      )}
    </div>
  );
}
