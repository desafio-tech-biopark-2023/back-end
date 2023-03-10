import { IBuilding, ILocator, ILocatorRequest } from "./locator";
import { IRent } from "./rent";

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
  value_rent: string;
  building?: IBuilding;
  rent?: IRent;
  person?: ILocator;
}

export interface IApartmentData {
  type?: string;
  floor?: string;
  number?: string;
  dorms?: string;
  suites?: string;
  bathrooms?: string;
  vacancies?: string;
  total_area?: string;
  private_area?: string;
  available?: string;
  visible?: string;
}
