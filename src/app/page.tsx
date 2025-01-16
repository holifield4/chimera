import DataTable, { Column } from "./components/table/DataTable";
import { DateTimeHelper } from "./lib/helper/DateTimeHelper";
import { IconCheck } from "./lib/icon/Check";
import { XMark } from "./lib/icon/XMark";
import { EqpReservationInterface } from "./lib/interfaces/eqp.interface";

export default async function Home() {
  const data: EqpReservationInterface[] = await fetch(
    "http://localhost:3000/api/eqpreservations"
  )
    .then(async (data) => {
      let response = await data.json();
      return response.data;
    })
    .catch((error) => console.error("Error fetching data:", error));

  const columns: Column<EqpReservationInterface>[] = [
    { key: "BookSNo", header: "Book's No." },
    { key: "RecordSource", header: "Record Source" },
    { key: "Equipment", header: "Equipment" },
    {
      key: "ActState",
      header: "Active State",
      render: (value) =>
        value ? (
          <IconCheck className="w-full text-accent" />
        ) : (
          <XMark className="w-full text-red-600" />
        ),
    },
    {
      key: "ActTime",
      header: "Active Time",
      render: (value) =>
        value ? (
          <IconCheck className="w-full text-accent" />
        ) : (
          <XMark className="w-full text-red-600" />
        ),
    },
    {
      key: "DeactTime",
      header: "Deactive Time",
      render: (value) => (
        <span>
          {String(DateTimeHelper(value))}
        </span>
      ),
    },
    {
      key: "CardEnable",
      header: "Card Enable",
      render: (value) =>
        value ? (
          <IconCheck className="w-full text-accent" />
        ) : (
          <XMark className="w-full text-red-600" />
        ),
    },
    {
      key: "Init",
      header: "Init",
      render: (value) =>
        value ? (
          <IconCheck className="w-full text-accent" />
        ) : (
          <XMark className="w-full text-red-600" />
        ),
    },
  ];

  return (
    <div className="flex-grow pt-[6.5rem] pb-8 overflow-hidden">
      <main className="h-full w-full px-4 overflow-hidden">
        <DataTable<EqpReservationInterface> columns={columns} data={data} />
      </main>
    </div>
  );
}
