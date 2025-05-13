import type { JSX } from "react";
import type { CountryProps } from "./country-props";
import type { LanguageCode } from "./language-code";

export interface CountrySelectProps {
  callBack: (value: CountryProps) => void;
  label?: string;
  language: LanguageCode;
  selectedCountryCode?: string;
  customizedSelect?: (props: CountrySelectProps) => JSX.Element;
}
