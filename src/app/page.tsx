"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getData() {
      await fetch("/api/EqpReservations")
        .then((data) => console.log(data.json()))
        .catch((error) => console.error("Error fetching data:", error));
    }
    getData();
  }, []);

  return (
    <div className="w-full h-screen max-h-screen">
      <main className="h-full w-full">
        <h1>Hello!</h1>
      </main>
    </div>
  );
}
