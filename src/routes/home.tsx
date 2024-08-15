import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Home() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <h1 className="text-3xl">Welcome to Tauri!</h1>

        <form
          className="flex flex-col items-center pt-5 gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
            className="text-center rounded-lg"
          />
          <button type="submit">Greet</button>
        </form>
        <p>{greetMsg}</p>
      </div>
    </div>
  );
}