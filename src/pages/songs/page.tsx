import { DataTable } from "@/components/data-table";
import data from "./data.json";
import { useEffect } from "react";
import { SongsService } from "@/service/songs/songs.service";

const Songs = () => {
  useEffect(() => {
    const fetchSongs = async () => {
      const res = await SongsService.getAllSongs();
      console.log(res, "ini response");
    };

    fetchSongs();
  }, []);

  return (
    <div className="px-4 lg:px-6">
      {" "}
      <DataTable data={data} />
    </div>
  );
};

export default Songs;
