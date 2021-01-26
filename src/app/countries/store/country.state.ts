import { Region } from 'src/app/models/region';
import { Country } from '../../models/country';

export interface CountryState {
  regions: Region[];
  countries: Country[];
  selectedCountry: string | null;
  error: string;
}
