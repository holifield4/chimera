"use client";
import { useEffect, useState } from "react";
import DataTable, { Column } from "./components/table/DataTable";
import { EqpReservationInterface } from "./lib/interfaces/eqp.interface";

export default function Home() {
  const [data, setData] = useState<EqpReservationInterface[]>([]);

  useEffect(() => {
    async function getData() {
      await fetch("/api/EqpReservations")
        .then(async (data) => {
          let response = await data.json();
          setData(await response.data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
    getData();
    console.log(data);
  }, []);

  const columns: Column<EqpReservationInterface>[] = [
    { key: "BookSNo", header: "Book's No." },
    { key: "RecordSource", header: "Record Source" },
    { key: "Equipment", header: "Equipment" },
    { key: "ActState", header: "Active State" },
    { key: "ActTime", header: "Active Time" },
    { key: "DeactTime", header: "Deactive Time" },
    { key: "CardEnable", header: "Card Enable" },
    { key: "Init", header: "Init" },
  ];

  return (
    <div className="flex-grow pt-[6.5rem] pb-4 overflow-hidden">
      <main className="h-full w-full px-4 overflow-hidden">
        {/* TODO: add unique keys */}
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
