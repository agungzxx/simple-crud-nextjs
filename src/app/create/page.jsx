"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [newNote, setNewNote] = useState("");
  const route = useRouter();

  // Post Handle
  async function addNew(newNote) {
    await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          content: newNote,
          user: "agungiman@gmail.com",
          additionalData: "",
        }),
      }
    );
    // Push forward to Home
    route.push("/");
  }

  return (
    <div className="grid grid-cols-1 text-center">
      <input
        type="text"
        className="max-w-screen bg-yellow-300 text-white p-2 m-3 rounded-lg focus:outline-none"
        onChange={(e) => {
          setNewNote(e.target.value);
        }}
      />

      <button
        onClick={() => addNew(newNote)}
        className="bg-blue-300 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white p-3 rounded-lg transition-colors duration-200"
      >
        Post New Note
      </button>
    </div>
  );
}
