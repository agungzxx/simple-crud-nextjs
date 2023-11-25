"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const [newNote, setNewNote] = useState("");
  const route = useRouter();

  // Read berdasarkan id
  async function readSingleContent() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${params.id}`,
      {
        cache: "no-store",
      }
    );
    const { content } = await res.json();
    // set newNote untuk ditampilkan pada value
    setNewNote(content);
  }

  // Patch Berdasarkan id
  async function patch(newNote) {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${params.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content: newNote,
        }),
      }
    );
    // Push forward to Home
    route.push("/");
  }

  useEffect(() => {
    readSingleContent();
  }, [params.id]);

  return (
    <div className="grid grid-cols-1 text-center">
      <input
        type="text"
        value={newNote}
        className="max-w-screen bg-yellow-300 text-white p-2 m-3 rounded-lg focus:outline-none"
        onChange={(e) => setNewNote(e.target.value)}
      />

      <button
        className="bg-blue-300 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white p-3 rounded-lg"
        onClick={() => {
          patch(newNote);
        }}
      >
        Update
      </button>
    </div>
  );
}
