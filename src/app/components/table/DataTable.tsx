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

const DataTable = <T extends { id: number }>({
  data,
  columns
}: TableProps<T>) => {
  return (
    <div className="text-xs h-full overflow-auto">
      <table className="min-w-full max-w-full">
        <TableHeader columns={columns} />
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                columns={columns}
              />
            ))
          ) : (
            <tr>
              <td colSpan={9} className="w-full h-[250px] border borderClass">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <p className="text-lg text-gray-400 dark:text-gray-300">No Data Found...</p>
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
        {columns.map((column) => {
          return (
            <th
              key={String(column.key)}
              className="p-3 border borderClass text-left bg-slate-100 dark:bg-slate-500 transition-colors"
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
};
const TableRow = <T extends { id: number }>({
  row,
  columns
}: TableRowProps<T>) => {
  return (
    <tr key={row.id}>
      {columns.map((column) => {
        return (
          <TableCell
            key={String(column.key)}
            value={row[column.key]}
            render={column.render}
          />
        );
      })}
      {/* <td className="border borderClass p-3">
        <div className="w-full flex gap-2.5 justify-center">
          <Button
            type="text"
            className="text-slate-900 dark:text-slate-50"
            icon={<Icon icon="eye" />}
            onClick={() => onView(row.id)}
          />
          <Button
            type="text"
            className="text-slate-900 dark:text-slate-50"
            icon={<Icon icon="edit" />}
            onClick={() => onUpdate(row.id)}
          />
          <Button
            type="text"
            className="text-slate-900 dark:text-slate-50"
            icon={<Icon icon="trash" />}
            onClick={() => onDelete(row.id)}
          />
        </div>
      </td> */}
    </tr>
  );
};

type TableCellProps<T> = {
  value: T;
  render?: (value: T) => ReactNode;
};
const TableCell = <T,>({ value, render }: TableCellProps<T>) => {
  return (
    <td className="border borderClass p-3">
      {render ? render(value) : String(value)}
    </td>
  );
};

export default DataTable;