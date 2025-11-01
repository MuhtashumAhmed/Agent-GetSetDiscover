import { useState, useEffect } from "react";

export default function ImageEnlarge({ src, alt, className = "" }) {
  // const [isImageEnlargeModalOpen, setIsOpen] = useState(false);
  const [isImageEnlargeModalOpen, setIsImageEnlargeModalOpen] = useState(false);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isImageEnlargeModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup on unmount
    };
  }, [isImageEnlargeModalOpen]);

  return (
    <>
      {/* Small image */}
      <img
        src={src}
        alt={alt}
        className={`w-10 h-10   cursor-pointer ${className} `}
        loading="lazy"
        onClick={() => setIsImageEnlargeModalOpen(true)}
      />

      {/* Overlay */}
      {isImageEnlargeModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setIsImageEnlargeModalOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="w-auto h-auto max-w-full max-h-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      )}
    </>
  );
}
