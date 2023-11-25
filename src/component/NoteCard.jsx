"use client";
import Link from "next/link";
import React from "react";

export const NoteCard = ({ created, content, id }) => {
  // Hapus function Berdasarkan id
  async function hapus() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    // Menggunakan reload agar ter refresh karena menggunakan useRoute.refresh tidak bisa
    window.location.reload();
  }

  return (
    <div className="p-5 space-y-3 space-x-3">
      <div className="bg-yellow-300 p-3 rounded-lg w-full">
        <h1 className="text-lg text-white">{content}</h1>
        <p className="text-base text-slate-400">created at {created}</p>
      </div>

      {/* Button Hapus */}
      <button
        className="bg-rose-300 text-rose-700 rounded-lg p-2 hover:bg-rose-700 hover:text-white transition-colors duration-200"
        onClick={hapus}
      >
        Delete
      </button>

      {/* Button edit dirrect ke Page id */}
      <Link href={`/${id}`}>
        <button className="bg-emerald-300 text-emerald-700 rounded-lg p-2 hover:bg-emerald-700 hover:text-white transition-colors duration-200">
          Edit
        </button>
      </Link>
    </div>
  );
};
