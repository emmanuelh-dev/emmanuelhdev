import { SelectDropdownProps } from '@/types'
import React, { useState, useEffect } from 'react'

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  value,
  title,
  setValue,
  setTitle,
  options,
}) => {
  const [open, setOpen] = useState(false)
  const handleSelectOption = (option: any) => {
    setTitle(option.title)
    setValue(option.value)
  }
  return (
    <div
      className="relative mt-2 h-12 w-full rounded-md border border-neutral-200 bg-white px-4 font-medium text-neutral-700 focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600 focus:ring-opacity-20"
      // onBlur={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex h-full w-full items-center justify-between"
      >
        <div className={`flex h-full w-full items-center ${open ? 'open' : ''}`}>{title}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="h-4 w-4 text-neutral-700"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-12 z-20 mt-2 w-full rounded-lg border border-neutral-100 bg-white py-2 shadow-xl lg:left-auto lg:right-0">
          {options.map((option, index) => (
            <div
              key={index}
              className={`cursor-pointer px-4 py-3 hover:bg-neutral-100 ${
                title === option.title ? ' bg-neutral-100' : ''
              }`}
              onClick={() => {
                handleSelectOption(option)
                setOpen(false)
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SelectDropdown
