'use client'

import HelloButton from "../Components/button/HelloButton"

export default function Home() {
  return (
    <section
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
          marginBottom: "12px",
          fontSize: "24px",
        }}
      >
        Welcome to my App
      </h1>
      <HelloButton buttonText={"Button 1"} buttonText2={"Button 2"} />
    </section>
  );
}
