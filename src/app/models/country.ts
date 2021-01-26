import { Currency } from "./currency";
import { Region } from "./region";

export interface Country extends Region {
  capital: string;
  population: number;
  currencies: Currency[];
  flag: string;
  region: string;
}
