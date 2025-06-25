"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type DropdownProps = {
  label?: string;
  items: string[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};

export default function Dropdown({
  label = "Select an option",
  items,
  value,
  onChange,
  onBlur,
  error,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        onBlur?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onBlur]);

  const handleSelect = (item: string) => {
    onChange(item);
    setOpen(false);
    onBlur?.();
  };

  return (
      <div className="relative w-full inline-block text-left" ref={dropdownRef}>
     {label && (
        <label
        
          className="block text-sm mb-1 font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white 
                   px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm 
                   hover:bg-gray-50 focus:outline-none"
      >
        {value || label}
        <ChevronDown className="ml-2 h-5 w-5 text-gray-500" />
      </button>

      <div
        className={`absolute right-0  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-200 ease-out z-10
          ${open ? "scale-100 opacity-100 visible" : "scale-95 opacity-0 invisible"}`}
        style={{ transformOrigin: "top right" }}
      >
        <ul className="py-1">
          {items.map((item) => (
            <li
              key={item}
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
