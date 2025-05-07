'use client'
import { Navigation } from "lucide-react";
import React from "react";

const Button = ({ text, route, className, arrow, onClick }: Button) => {

  return (
      <button
        onClick={() =>
          alert(
            "This is only a demo website, contact s2ddiq on discord for a complete version."
          )
        }
        // onClick={onClick}
        className={`hover:rotate-1 w-72 h-14 uppercase border-2 border-[var(--secondary)] p-4 py-2 flex justify-center items-center font-semibold text-white hover:scale-90 transition-all duration-300 cursor-pointer ${className} ${
          arrow
            ? "hover:bg-[var(--secondary)] !text-[var(--secondary)] hover:!text-black"
            : "bg-[var(--secondary)]"
        }`}
      >
        {text}
        <Navigation
          size={20}
          className={`${arrow ? "" : "hidden"} ml-4
        `}
        />
      </button>
  );
};

export default Button;
