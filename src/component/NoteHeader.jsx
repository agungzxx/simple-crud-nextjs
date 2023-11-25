import Link from "next/link";
import React from "react";

export const NoteHeader = () => {
  return (
    <div className="flex justify-between bg-blue-600  text-white p-3 ">
      <Link href={"/"} className="hover:text-yellow-300">
        NoteApp
      </Link>
      <Link href={"/create"} className="hover:text-yellow-300">
        Tambah
      </Link>
    </div>
  );
};
