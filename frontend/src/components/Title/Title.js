import React from "react";

export default function Title({ title, fontSize, margin }) {
  return (
    <h1 style={{ fontSize, marginTop: "0.5rem", color: "rgb(100, 100, 100)" }}>
      {title}
    </h1>
  );
}
