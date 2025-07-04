import React from "react";
import "../index.css";
import type { CountrySelectProps } from "../types/country-select-props";
import useCountries from "../hooks/data-country-hook";

export const CountrySelectApi: React.FC<CountrySelectProps> = ({ callBack, label = "Select a country", selectedCountryCode, language, customizedSelect }) => {
  const { findByAlpha2, countryList, codeToFlag } = useCountries(language);

  if (customizedSelect) {
    return customizedSelect({ countryList, language });
  }

  const handleCallBack = (event: any) => {
    const selectedCountry = findByAlpha2(event.target.value);
    if (!selectedCountry) return;
    callBack?.(selectedCountry);
  };

  return (
    <div className="select-container">
      <label className={`floating-label`}>{label}</label>
      <select defaultValue={selectedCountryCode} onChange={handleCallBack} className="modern-select">
        <option value="">Select a country</option>
        {countryList.map((country, index) => (
          <option key={index} value={country.code}>
            {country.label} {codeToFlag(country.code)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelectApi;
