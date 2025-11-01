import { useRef, useState } from "react";
import { FiUpload, FiX, FiExternalLink } from "react-icons/fi";
import { MdUploadFile } from "react-icons/md";

/**
 * FileUploadButton
 *
 * Props:
 * - buttonText (string)        : text to show on the right side (default "Upload")
 * - icon (React component)     : left icon component (default FiUpload)
 * - accept (string)            : file accept string (e.g. "image/*,.pdf")
 * - multiple (bool)            : allow multiple files
 * - disabled (bool)            : disable control
 * - onChange (fn)              : receives (files: FileList) when user selects files
 * - showFileName (bool)        : show selected filename(s) below the button
 * - showPreview (bool)         : show preview for images or file names for documents
 * - classNames (object)        : { wrapper, button, icon, text, fileName, input }
 */
const FileUploadButton = ({
  buttonText = "Upload",
  icon: Icon = MdUploadFile,
  accept = "",
  multiple = false,
  disabled = false,
  onChange,
  showFileName = false,
  showPreview = false,
  classNames = {},
}) => {
  const inputRef = useRef(null);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleButtonClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleKeyDown = (e) => {
    // allow Enter or Space to trigger file dialog for accessibility
    if ((e.key === "Enter" || e.key === " ") && !disabled) {
      e.preventDefault();
      inputRef.current?.click();
    }
  };

  const handleChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      if (typeof onChange === "function") onChange(files);
    } else {
      setSelectedFiles([]);
      if (typeof onChange === "function") onChange(files);
    }
  };

  const handleRemoveFile = (index, e) => {
    e.stopPropagation();
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);

    // Create a new FileList-like object for the onChange event
    const dataTransfer = new DataTransfer();
    newFiles.forEach(file => dataTransfer.items.add(file));

    if (typeof onChange === "function") onChange(dataTransfer.files);
  };

  const handleClearAll = (e) => {
    e.stopPropagation();
    setSelectedFiles([]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    if (typeof onChange === "function") onChange(null);
  };

  const handleOpenFile = (file, e) => {
    e.stopPropagation();
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL, '_blank');
  };

  const isImageFile = (file) => {
    return file.type.startsWith('image/');
  };

  const truncateFileName = (name, maxLength = 12) => {
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength - 3) + '...';
  };

  return (
    <div className={`flex flex-col ${classNames.wrapper || ""}`}>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        onClick={handleButtonClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        className={`
          relative inline-flex items-center gap-3 cursor-pointer select-none
          ${disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-md"}
          ${classNames.button || "px-4 py-2 rounded-lg border border-gray-200 bg-white"}
          min-h-[44px] ${selectedFiles.length > 0 ? "pr-10" : ""}
        `}
      >
        {/* Left Icon */}
        <div className={`flex items-center ${classNames.icon || ""}`}>
          <Icon className="w-5 h-5 text-gray-600" />
        </div>

        {/* File preview/name inside the button */}
        {selectedFiles.length > 0 ? (
          <div className="flex-1 min-w-0 flex items-center gap-2">
            {showPreview && isImageFile(selectedFiles[0]) ? (
              <>
                <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded overflow-hidden">
                  <img
                    src={URL.createObjectURL(selectedFiles[0])}
                    alt={selectedFiles[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span 
                  className="text-sm font-medium text-gray-700 truncate hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={(e) => handleOpenFile(selectedFiles[0], e)}
                  title="Click to view file"
                >
                  {truncateFileName(selectedFiles[0].name)}
                </span>
                <FiExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
              </>
            ) : (
              <>
                <div className="flex-shrink-0 w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">
                    {selectedFiles[0].type.split('/')[1]?.substring(0, 3).toUpperCase() || 'FILE'}
                  </span>
                </div>
                <span 
                  className="text-sm font-medium text-gray-700 truncate hover:text-blue-600 hover:underline cursor-pointer"
                  onClick={(e) => handleOpenFile(selectedFiles[0], e)}
                  title="Click to view file"
                >
                  {truncateFileName(selectedFiles[0].name)}
                </span>
                <FiExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0" />
              </>
            )}
          </div>
        ) : (
          /* Right Text */
          <div className={`text-sm font-medium ${classNames.text || "text-gray-700"}`}>
            {buttonText}
          </div>
        )}

        {/* Cross icon to remove file */}
        {selectedFiles.length > 0 && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleClearAll(e);
            }}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove file"
          >
            <FiX className="w-4 h-4" />
          </button>
        )}

        {/* Hidden native file input */}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className={classNames.input || "hidden"}
          aria-hidden="true"
        />
      </div>

      {/* Additional files for multiple selection */}
      {multiple && selectedFiles.length > 1 && (
        <div className="mt-2 space-y-1">
          <p className="text-xs text-gray-500">+{selectedFiles.length - 1} more files</p>
          <button
            type="button"
            onClick={handleClearAll}
            className="text-xs text-red-500 hover:text-red-700 font-medium"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Fallback to simple file names if preview is disabled */}
      {showFileName && !showPreview && selectedFiles.length > 0 && (
        <div className={`mt-2 text-sm text-gray-600 ${classNames.fileName || ""}`}>
          {selectedFiles.length === 1 ? (
            <span className="truncate">{selectedFiles[0].name}</span>
          ) : (
            <ul className="list-disc pl-4">
              {selectedFiles.map((file, i) => (
                <li key={i} className="truncate">{file.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUploadButton;