export interface IData {
  temperature: number;
  humidity: number;
  illuminance: number;
  time: string;
}

export interface IIdealData extends Omit<IData, "time"> {
  time?: never;
}
