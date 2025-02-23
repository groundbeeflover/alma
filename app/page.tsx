import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log("what am i?")
  return (
    <div>
      <h1 className="titleText">Hello World</h1>
      <Hello />
    </div>
  );
}
