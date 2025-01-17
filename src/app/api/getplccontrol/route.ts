import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "database.mdb");

    const buffer = readFileSync(filePath);
    const reader = new MDBReader(buffer);

    const table = reader.getTable("PLCControl");

    return Response.json({
      data: table.getData(),
    });
  } catch (error) {
    return Response.json({ message: "Failed reading files: ", error });
  }
}
