// hooks/useCountries.ts
import { CountryJsonProps } from "src/types/country-json-inteface";
import countries from "../data/world.json";
import type { CountryDataProps } from "../types/country-data-props";
import type { LanguageCode } from "../types/language-code";

export default function useCountries(language: LanguageCode) {
  const countryList: CountryDataProps[] = countries.map(
    (country: CountryJsonProps): CountryDataProps => ({
      id: country.id,
      code: country.alpha2,
      code2: country.alpha3,
      label: country[language] ?? country.en,
    })
  );

  const findByAlpha2 = (code: string): CountryDataProps | undefined => {
    const country = countries.find((country: CountryJsonProps) => country.alpha2 === code);
    if (!country) return undefined;
    return {
      code: country?.alpha2,
      code2: country?.alpha3,
      id: country?.id,
      label: country[language],
    };
  };

  const codeToFlag = (code: string) => {
    const codePoints = code
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return { countryList, findByAlpha2, codeToFlag };
}
