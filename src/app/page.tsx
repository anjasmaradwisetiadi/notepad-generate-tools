'use client'
import Image from "next/image";
import { Button } from "flowbite-react";
import {database} from "../firebase/config";
import { ref, get, set } from "firebase/database";
import NoteWorker from "./note-worker/page";

export default function Home() {
  
  const genereateDatabase = async ()=> {
    const userId = "1";
    const userName= "Anjasmara";
    const email= "anjs@gmail.com"
    const description = "description mencoba testing"

    // try {
    //   const headerRef = ref(database, 'anjas-code'); // Get ref of 'data'
    //   const snapshot = await get(headerRef); // Get data of 'data'
    //   console.log("snapshot.val() = ")
    //   console.log(snapshot)
    //   return snapshot.val();
    // } catch (error) {
    //   console.error('Error getting data:', error);
    //   throw error;
    // }

    const db = database;
    set(ref(db, 'users/' + userId), {
      username: userName,
      email: email,
      description : description
    });
  }
  
  return (
    <div className="">
      <main className="w-full flex flex-col row-start-2 items-center sm:items-start">
        <NoteWorker/>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
