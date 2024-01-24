"use client";
import { ReactNode, useState } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center hover:cursor-pointer"
      >
        <h2 className="py-2 w-full text-left transition duration-300 ease-in-out">
          {title}
        </h2>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>
      <div
        className={`duration-300 ease-in-out overflow-hidden border-b-2 ${
          isOpen ? "max-h-[150px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
