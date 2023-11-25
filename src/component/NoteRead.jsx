"use client";
import React, { useEffect, useState } from "react";
import { NoteCard } from "./NoteCard";

export const NoteRead = () => {
  const [contents, setContents] = useState([]);
  // Read All
  async function read() {
    const res = await fetch(
      "https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='agungiman@gmail.com')",
      {
        cache: "no-store",
      }
    );
    const { items } = await res.json();
    setContents(items);
  }

  useEffect(() => {
    read();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2">
        {contents.map(({ content, created, id }) => {
          return (
            <NoteCard content={content} created={created} key={id} id={id} />
          );
        })}
      </div>
    </div>
  );
};
