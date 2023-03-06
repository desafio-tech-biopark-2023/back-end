import { IApartment } from "./apartment";
import { ILocator } from "./locator";

export interface IRentData {
  monthly_rent_value: string;
  date_start_rent: string;
  date_end_rent: string;
}

export interface IRent extends IRentData {
  person: ILocator;
  apartment: IApartment;
}

export interface IRentPartial {
  monthly_rent_value?: string;
  date_start_rent?: string;
  date_end_rent?: string;
}
