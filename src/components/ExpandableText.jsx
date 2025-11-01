import { useState } from "react";

const ExpandableText = ({ text, limit = 120 }) => {
  const [expanded, setExpanded] = useState(false);

  // show limited text when not expanded
  const displayText = expanded ? text : text.substring(0, limit) + (text.length > limit ? "..." : "");

  return (
    <p className="text-[8.87px] font-manrope text-[#838383]">
      {displayText}{" "}
      {text.length > limit && (
        <span
          className="text-[#090909] cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "see less" : "see more"}
        </span>
      )}
    </p>
  );
};

export default ExpandableText;
