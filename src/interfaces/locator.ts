export interface ILocator {
  name: string;
  email: string;
  password: string;
  telephone: string;
  naturalPerson: boolean;
  legalPerson: boolean;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  natural_person?: INaturalPerson;
  legal_person?: ILegalPerson;
  address: IAdress;
  rent: string;
  building: string;
  apartment: string;
}

export interface ILegalPerson {
  cnpj: string;
  fantasy_name: string;
  registration: string;
  incorporation_date: string;
  regime_type: string;
}

export interface INaturalPerson {
  rg: string;
  cpf: string;
  birth_date: string;
  gender: string;
  ethnicity: string;
  occupation: string;
  income: string;
  marital_status: string;
  nationality: string;
}

export interface IAdress {
  public_place: string;
  number: string;
  zip_code: string;
  complement: string;
  district: string;
  city: string;
  state: string;
  country: string;
}
