import React from "react";

interface HighlightedTextProps {
  colorText?: string;
  colorLine?: string;
  title: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  colorLine,
  colorText,
  title,
}) => {
  return (
    <span
      className={`relative z-0 inline-block ${colorText ? colorText : "text-fgreen-950"}`}
    >
      {title}
      <span
        className={`absolute -bottom-1 left-0 w-full h-2 rounded-md -z-20 ${colorLine ? colorLine : "bg-fgreen-100/80"}`}
      ></span>
    </span>
  );
};

export default HighlightedText;
