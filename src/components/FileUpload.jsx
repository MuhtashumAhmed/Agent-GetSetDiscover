import { useDropzone } from "react-dropzone";
import { FiUpload, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

// const FileUpload = ({ label, accept, required, onFileSelect, name }) => {
const FileUpload = ({ label, accept, required, onFileSelect, name, error }) => {
  const [preview, setPreview] = useState(null); // store preview URL
  const [file, setFile] = useState(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple: false,
    onDrop: (files) => {
      const uploadedFile = files[0];
      setFile(uploadedFile);

      // generate preview for images
      if (uploadedFile && uploadedFile.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(uploadedFile));
      } else {
        setPreview(null); // not an image, no preview
      }

      if (onFileSelect) onFileSelect(uploadedFile, name); // send back to parent
    },
  });

  // cleanup object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleRemove = (e) => {
    e.stopPropagation();
    setFile(null);
    setPreview(null);
    if (onFileSelect) onFileSelect(null, name); // reset in parent
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-myGray text-[12.3px]">
        {label} {required && "*"}
      </label>

      <div
        {...getRootProps()}
        // className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl h-[150px] cursor-pointer transition ${isDragActive ? "border-blue-500 bg-blue-50" : "border-[#0000001A]"
        //   }`}
        className={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-xl h-[150px] cursor-pointer transition
    ${error ? "border-red-500  " : isDragActive ? "border-blue-500 bg-blue-50" : "border-[#0000001A]"}
  `}
      >
        <input {...getInputProps()} />

        {preview ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={preview}
              alt="preview"
              className="h-full object-contain rounded-xl"
            />
            <button
              type="button"
              onClick={(e) => handleRemove(e)}
              className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500 p-1 rounded-full shadow  "

            >
              <FiX size={18} />
            </button>
          </div>
        ) : (
          <>
            {/* <FiUpload size={26} className="text-gray-500 mb-2" /> */}
            <FiUpload size={26} className={`${error ? "text-red-400" : "text-gray-500"}  mb-2`} />
            {isDragActive ? (
              <p className="text-sm font-medium text-blue-600">
                Drop the file here...
              </p>
            ) : (

              <p className={`text-[12.3px] ${error ? "text-red-400" : "text-[#717182]"}  text-center`}>
                Click to upload or drag & drop
              </p>
            )}

            <button
              type="button"
              className={`h-[31.48px] w-[86.5px] border-[1px] ${error ? "border-red-400 text-red-400" :  "border-[#0000001A]" } text-[#0A0A0A] font-noto text-[12.3px] rounded-[6.75px] self-start ml-4 -mb-6`}
            >
              Select File
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
