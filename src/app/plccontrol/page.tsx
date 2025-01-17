import DataTable, { Column } from "../components/table/DataTable";
import { IconCheck } from "../lib/icon/Check";
import { XMark } from "../lib/icon/XMark";
import { PlcControlInterface } from "../lib/interfaces/plc.interface";

export default async function PlcControl() {
  const data: PlcControlInterface[] = await fetch(
    "http://localhost:3000/api/getplccontrol"
  )
    .then(async (data) => {
      let response = await data.json();
      return response.data;
    })
    .catch((error) => console.error("Error fetching data:", error));

  const columns: Column<PlcControlInterface>[] = [
    { key: "DeviceName", header: "Device Name" },
    { key: "Gateway", header: "Gateway" },
    {
      key: "CommandTag",
      header: "Command Tag",
      render: (value) => (
        <>
          <span>{`${value ? value : "N/A"}`}</span>
        </>
      ),
    },
    {
      key: "StatusTag",
      header: "Status Tag",
      render: (value) => (
        <>
          <span>{`${value ? value : "N/A"}`}</span>
        </>
      ),
    },
    {
      key: "DataTag",
      header: "Data Tag",
      render: (value) => (
        <>
          <span>{`${value ? value : "N/A"}`}</span>
        </>
      ),
    },
    {
      key: "Download",
      header: "Download",
      render: (value) =>
        value ? (
          <IconCheck className="w-full text-accent" />
        ) : (
          <XMark className="w-full text-red-600" />
        ),
    },
    { key: "PLCType", header: "Type" },
    {
      key: "CPName",
      header: "CP Name",
      render: (value) => (
        <>
          <span>{`${value ? value : "N/A"}`}</span>
        </>
      ),
    },
    { key: "Message", header: "Message" },
    {
      key: "TimeSync",
      header: "Time Sync",
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
        <DataTable<PlcControlInterface> columns={columns} data={data} />
      </main>
    </div>
  );
}
