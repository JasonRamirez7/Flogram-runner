"use client";

import floparser from "./@munezero/floparser";
import { useEffect, useState } from "react";

export default function () {
  const [res, setRes] = useState([]);
  const [value, setValue] = useState("");
  const [err, setErr] = useState([]);

  const execute = async () => {
    floparser.run(value)
      .then((res) => {
        console.log("run res::: ", res);
        setRes(res);
        setErr([])
      })
      .catch((err) => {
        setRes([]);
        setErr(err);
      });
  };

  return (
    <div style={{ display: "flex", gap: 12, paddingTop: 34 }}>
      <button
        style={{
          position: "absolute",
          padding: 8,
          left: "51%",
          borderRadius: 8,
          top: 4,
        }}
        onClick={execute}
      >
        Run
      </button>
      <textarea
        style={{ width: "50%", height: 500, fontSize: 16 }}
        value={value}
        onChange={({ target: { value: v } }) => setValue(v)}
      />
      <div style={{ display: "flex", width: '50%', flexDirection: "column" }}>
        {res.map((result, index) => (
          <div key={index}>{result}</div>
        ))}

        {err.map((error, index) => (
          <div key={index}>{error.message}</div>
        ))}
      </div>
    </div>
  );
}
