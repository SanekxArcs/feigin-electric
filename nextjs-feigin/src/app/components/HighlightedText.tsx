import React from "react";

interface HighlightedTextProps {
  colorText?: string;
  colorLine?: string;
  title: string;
  borderSize?: string;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  colorLine,
  colorText,
  title,
  borderSize
}) => {
  return (
    <span id="highlighted-text"
      className={`relative z-0 animate-in select-none inline-block ${colorText ? colorText : "text-fgreen-950"}`}
    >
      {title}
      <span
        className={`absolute -bottom-1 left-0 w-full ${borderSize ? borderSize : "h-2"}  rounded-md -z-20 ${colorLine ? colorLine : "bg-fgreen-100/80"}`}
      ></span>
    </span>
  );
};

export default HighlightedText;
