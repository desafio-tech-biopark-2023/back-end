import { IBuilding, ILocator } from "./locator";

export interface IApartment {
  type: string;
  floor: string;
  number: string;
  dorms: string;
  suites: string;
  bathrooms: string;
  vacancies: string;
  total_area: string;
  private_area: string;
  available: string;
  visible: string;
  building?: IBuilding;
}
