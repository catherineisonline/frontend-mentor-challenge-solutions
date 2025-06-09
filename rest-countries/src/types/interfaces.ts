export interface CountriesInterface {
  name: string;
  population: string;
  region: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  index: number;
}

export interface SingleCountryInterface {
  nativeName: string;
  population: string;
  region: string;
  subregion: string;
  capital: string;
  flags: {
    svg: string;
    png: string;
  };
  currencies?: [
    {
      name: string;
    }
  ];
  languages?: [
    {
      name: string;
    }
  ];
  topLevelDomain: string;

}

export interface RegionsInterface {
  label: string;
  name: string;
}

export interface SearchProps {
  searchCountries: (value: string, target: string) => void;
  setCountries: any;
  searchInput: string;
  resetInput: () => void;
}
