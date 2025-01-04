"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function PthinksQuote() {
  const words = [
    {
      text: "Changing",
      className: "text-slate-500 dark:text-blue-500",
    },
    {
      text: "the",
      className: "text-slate-500 dark:text-blue-500",
    },
    {
      text: "way",
      className: "text-slate-500 dark:text-blue-500",
    },
    {
      text: "we",
      className: "text-slate-500 dark:text-blue-500",
    },
    {
      text: "THINK",
      className: "text-green-800 dark:text-blue-500",
    },
    {
      text: "&",
      className: "text-slate-500 dark:text-blue-500",
    },
    {
      text: "LEARN!",
      className: "text-green-800 dark:text-blue-500",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[5rem]">
      <TypewriterEffect words={words} />
    </div>
  );
}
