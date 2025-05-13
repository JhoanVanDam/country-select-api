import React from "react";
import countries from "./countries.json";
import "./index.css";
import type { CountrySelectProps } from "./types/country-select-props";

export const CountrySelect: React.FC<CountrySelectProps> = ({
  callBack,
  label = "Select a country",
  selectedCountryCode,
}) => {
  const searchCountry = (countryCode: string) => {
    return countries.find((country) => country.code === countryCode);
  };

  const handleCallBack = (event: any) => {
    const selectedCountry = searchCountry(event.target.value);
    if (!selectedCountry) return;
    callBack(selectedCountry);
  };

  return (
    <div className="select-container">
      <label className={`floating-label`}>{label}</label>
      <select onChange={handleCallBack} className="modern-select">
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option
            key={index}
            value={country.code}
            selected={country.code === selectedCountryCode}
          >
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
