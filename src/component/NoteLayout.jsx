import React from "react";
import { NoteHeader } from "@/component/NoteHeader";

export const NoteLayout = ({ children }) => {
  return (
    <div className="m-auto max-w-3xl">
      <NoteHeader />
      {children}
    </div>
  );
};
