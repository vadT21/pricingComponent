import { create } from "zustand";
import axios, { AxiosResponse } from "axios";
import { IDataItem } from "../types";

interface IDataStore {
  data: IDataItem | null;
  isLoading: boolean;
  fetchData: () => Promise<void>;
}

const useDataStore = create<IDataStore>((set) => ({
  data: null,
  isLoading: false,
  fetchData: async () => {
    try {
      set({ isLoading: true });
      const response: AxiosResponse<IDataItem> = await axios.get("data.json");
      console.log(response);
      set({ data: response.data, isLoading: false });
    } catch (error) {
      console.error(error);
      set({ isLoading: false });
    }
  },
}));

export default useDataStore;
