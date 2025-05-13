// hooks/useCountries.ts
import countries from "../data/world.json";
import type { CountryDataProps } from "../types/country-data-props";
import type { LanguageCode } from "../types/language-code";

export function useCountries(language: LanguageCode) {
  const countryList: CountryDataProps[] = countries.map(
    (country): CountryDataProps => ({
      id: country.id,
      code: country.alpha2,
      code2: country.alpha3,
      label: country[language] ?? country.en,
    })
  );

  const findByAlpha2 = (code: string): CountryDataProps | undefined => {
    const country = countries.find((country) => country.alpha2 === code);
    if (!country) return undefined;
    return {
      code: country?.alpha2,
      code2: country?.alpha3,
      id: country?.id,
      label: country[language],
    };
  };

  return { countryList, findByAlpha2 };
}
