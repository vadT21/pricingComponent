export interface IData {
  name: string;
  price: {
    annually: number;
    monthly: number;
  };
  storage: number;
  users: number;
  sendup: number;
}
export interface IDataItem {
  pricing: IData[];
}
