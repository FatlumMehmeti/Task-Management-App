import { useState } from "react";

export function AddListButton({
  onCreate,
}: {
  onCreate: (title: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  if (!open)
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          width: "100%",
          background: "rgba(0,0,0,0.4)",
          border: "none",
          color: "white",
          padding: "0.5rem",
          borderRadius: "0.4rem",
        }}
      >
        + Add list
      </button>
    );

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.6)",
        padding: "0.5rem",
        borderRadius: "0.4rem",
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter list title…"
        style={{
          width: "100%",
          marginBottom: "0.5rem",
          padding: "0.3rem",
          borderRadius: "0.3rem",
          border: "none",
          outline: "none",
        }}
      />
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          onClick={() => {
            if (!title.trim()) return;
            onCreate(title.trim());
            setTitle("");
            setOpen(false);
          }}
          style={{
            background: "#0284c7",
            border: "none",
            color: "white",
            padding: "0.3rem 0.7rem",
            borderRadius: "0.3rem",
          }}
        >
          Add list
        </button>
        <button onClick={() => setOpen(false)} style={{ color: "#ddd" }}>
          ×
        </button>
      </div>
    </div>
  );
}
