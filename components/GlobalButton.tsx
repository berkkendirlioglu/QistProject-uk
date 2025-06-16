import React, { ReactNode } from "react";

export default function GlobalButton({
  icon,
  text,
}: {
  icon?: ReactNode;
  text: string;
}) {
  return (
    <button
      className={`bg-[#246fcc] transition-all hover:bg-[#387cd0] py-2 px-4 rounded-[2px] text-white cursor-pointer ${icon && 'flex gap-2'}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
}
