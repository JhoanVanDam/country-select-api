import React from "react";
import "./index.css";
import type { CountrySelectProps } from "./types/country-select-props";
import { countryCodeToFlagEmoji } from "./util/code-to-flag";
import { useCountries } from "./hooks/data-country-hook";

export const CountrySelect: React.FC<CountrySelectProps> = ({
  callBack,
  label = "Select a country",
  selectedCountryCode,
  language,
  customizedSelect,
}) => {
  const { findByAlpha2, countryList } = useCountries(language);

  if (customizedSelect) {
    return customizedSelect({
      callBack,
      selectedCountryCode,
      language,
    });
  }

  const handleCallBack = (event: any) => {
    const selectedCountry = findByAlpha2(event.target.value);
    if (!selectedCountry) return;
    callBack(selectedCountry);
  };

  return (
    <div className="select-container">
      <label className={`floating-label`}>{label}</label>
      <select onChange={handleCallBack} className="modern-select">
        <option value="">Select a country</option>
        {countryList.map((country, index) => (
          <option
            key={index}
            value={country.code}
            selected={country.code === selectedCountryCode}
          >
            <span>{countryCodeToFlagEmoji(country.code)}</span>
            {country.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
