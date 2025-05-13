import type { CountryProps } from "./country-props";

export interface CountrySelectProps {
  callBack: (value: CountryProps) => void;
  label?: string;
  selectedCountryCode?: string;
}
