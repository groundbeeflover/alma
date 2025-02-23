import Link from "next/link";
import React from "react";

const Page = () => {
  return(
    <div>
      <h1>Letter page</h1>

      <ul>
        <li>
          <Link href = "/home/letters/1">Letter 1</Link>
        </li>
        <li>
          <Link href = "/home/letters/2">Letter 2</Link>
        </li>
        <li>
          <Link href = "/home/letters/3">Letter 3</Link>
        </li>
      </ul>
    </div>

  )

};  
export default Page;