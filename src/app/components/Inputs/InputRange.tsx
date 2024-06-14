import React from "react";
import "./styleRange.css";

type RangeProps = {
  target: number;
};

export default function InputRange({ target }: RangeProps) {
  return (
    <div>
      <input
        type="range"
        value={target}
        className="w-[10rem] appearance-none h-2 outline-none focus:outline-none bg-gradient-to-l from-emerald-700 to-emerald-400"
      />
    </div>
  );
}
