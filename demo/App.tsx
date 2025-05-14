import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import CountrySelectApi from "../src/country-select";
import type { CustomizedSelectProps } from "../src/types/country-select-props";
import { useState } from "react";
import { countryCodeToFlagEmoji } from "../src/util/code-to-flag";
import { CountryDataProps } from "../src/types/country-data-props";
import { LanguageSelect } from "./language-select";
import { LanguageCode } from "../src/types/language-code";
import { Languages } from "./data/language-data";

function App() {
  const [country, setCountry] = useState<CountryDataProps | null>(null);
  const [language, setLanguage] = useState<LanguageCode>(null);

  const CustomSelect = ({ countryList }: CustomizedSelectProps) => {
    const handleGetCountry = (event: any) => {
      const selected = countryList.find((c) => c.code === event.target.value);
      if (selected) {
        setCountry(selected);
      }
    };

    return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={country?.code || ""} label="Country" onChange={handleGetCountry}>
          {countryList.map((country, index) => (
            <MenuItem key={index} value={country.code}>
              {country.label} {countryCodeToFlagEmoji(country.code)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <div style={{ fontFamily: "Geist Mono" }} className="flex flex-col items-center justify-center w-full h-dvh *:mt-10">
      <div className="flex flex-col items-center justify-center w-1/3">
        <LanguageSelect onChange={(code) => setLanguage(code)} value={language} />
      </div>

      <div className="flex items-center justify-center text-2xl">{Languages.find((item) => item.code === language)?.label ?? "No language selected"}</div>

      <div className="flex items-center justify-center w-1/3">
        <CountrySelectApi language={language} label="Depilate" customizedSelect={CustomSelect} selectedCountryCode="co" />
      </div>

      <div className="flex items-center justify-center text-2xl">{country?.label ?? "No country selected"}</div>
    </div>
  );
}
export default App;
