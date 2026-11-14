import { httpClient } from "@/lib/axios/httpClient";

export const SongsService = {
  getAllSongs: async () => {
    const response = await httpClient.get("songs");
    return response.data;
  },
};
