import React from "react";
import countries from "./countries.json";
import type { CountrySelectProps } from "./country-select-props";
import "./index.css";

export const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  callBack,
  label = "Select a country",
}) => {
  return (
    <div className="select-container">
      <label className={`floating-label ${value ? "filled" : ""}`}>
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => callBack(e.target.value)}
        className="modern-select"
      >
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelect;
