import { DataTable } from "@/components/data-table";
import data from "./data.json";

const Songs = () => {
  return (
    <div className="px-4 lg:px-6">
      {" "}
      <DataTable data={data} />
    </div>
  );
};

export default Songs;
