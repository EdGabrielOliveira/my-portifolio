import React, { useState } from "react";
import "./styleRange.css";

type RangeProps = {
  target: number;
};

export default function InputRange({ target }: RangeProps) {
  const [value, setValue] = useState(target);

  return (
    <div>
      <input
        type="range"
        value={value}
        disabled
        className="xl:w-[10rem] sm:w-[10rem] md:w-[7.5rem] appearance-none h-2 outline-none focus:outline-none bg-gradient-to-l from-sky-700 to-sky-400"
      />
    </div>
  );
}
