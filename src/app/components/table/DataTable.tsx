import { ReactNode } from "react";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T]) => ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};

const DataTable = <T, >({
  data,
  columns
}: TableProps<T>) => {
  return (
    <div className="text-xs h-full overflow-auto border-b">
      <table className="min-w-full max-w-full">
        <TableHeader columns={columns} />
        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow
                key={index}
                row={row}
                id={index}
                columns={columns}
              />
            ))
          ) : (
            <tr>
              <td colSpan={columns.length+1} className="w-full h-[250px] border">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <p className="text-lg text-gray-400">No Data Found...</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

type TableHeaderProps<T> = {
  columns: Column<T>[];
};
const TableHeader = <T,>({ columns }: TableHeaderProps<T>) => {
  return (
    <thead>
      <tr className="sticky top-0 z-40">
        <th className="p-3 border-x text-primary bg-accent">No.</th>
        {columns.map((column) => {
          return (
            <th
              key={String(column.key)}
              className="p-3 border-x text-left text-primary bg-accent"
            >
              {column.header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

type TableRowProps<T> = {
  row: T;
  columns: Column<T>[];
  id: number;
};
const TableRow = <T, >({
  row,
  columns,
  id
}: TableRowProps<T>) => {
  return (
    <tr key={id} className={`${id % 2 === 0 && "bg-gray-100"}`}>
      <td className="border p-3 text-center font-semibold">{id+1}.</td>
      {columns.map((column) => {
        return (
          <TableCell
            key={String(column.key)}
            value={row[column.key]}
            render={column.render}
          />
        );
      })}
    </tr>
  );
};

type TableCellProps<T> = {
  value: T;
  render?: (value: T) => ReactNode;
};
const TableCell = <T,>({ value, render }: TableCellProps<T>) => {
  return (
    <td className="border p-3">
      {render ? render(value) : String(value)}
    </td>
  );
};

export default DataTable;