import type { JSX } from "react";
import type { LanguageCode } from "./language-code";
import type { CountryDataProps } from "./country-data-props";

export interface CountrySelectProps {
  callBack: (value: CountryDataProps) => void;
  label?: string;
  language: LanguageCode;
  selectedCountryCode?: string;

  customizedSelect?: (props: CustomizedSelectProps) => JSX.Element;
}

export interface CustomizedSelectProps {
  countryList: CountryDataProps[];
  language: LanguageCode;
}
