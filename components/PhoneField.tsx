"use client";

import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneFieldProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value: string;                     // RHF controlled value
  onChange: (value: string) => void; // RHF controlled onChange
  onBlur?: () => void;              // RHF onBlur
  error?: string;                   // optional error message
}

export default function PhoneField({
  label = "Phone Number*",
  name = "phone",
  placeholder = "Enter your phone number",
  value,
  onChange,
  onBlur,
  error,
}: PhoneFieldProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <PhoneInput
        country="us"
        value={value}
        onChange={(phone) => onChange(phone)}
        onBlur={onBlur}
        inputProps={{
          name: name,
          id: name,
       
        }}
        placeholder={placeholder}
        enableSearch
        containerClass="w-full"
        inputClass="w-full h-10 text-base px-3 rounded-md border border-gray-300"
        buttonClass="border border-gray-300 rounded-l-md"
        dropdownClass="rounded-md"
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}