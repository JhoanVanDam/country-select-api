// hooks/useCountries.ts
import countries from "../data/world.json";
import type { CountryProps } from "../types/country-props";
import type { LanguageCode } from "../types/language-code";

export interface CountryListProps {
  id: number;
  code: string;
  code2: string;
  label: string;
}

export function useCountries(language: LanguageCode) {
  const countryList = countries.map(
    (country): CountryListProps => ({
      id: country.id,
      code: country.alpha2,
      code2: country.alpha3,
      label: country[language] ?? country.en,
    })
  );

  const findByAlpha2 = (code: string): CountryProps | undefined =>
    countries.find((country) => country.alpha2 === code);

  return { countryList, findByAlpha2 };
}
