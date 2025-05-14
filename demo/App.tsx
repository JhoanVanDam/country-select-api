import CountrySelectApi from "../src/components/country-select";
import type { CountryDataProps } from "../src/types/country-data-props";
import type { CustomizedSelectProps } from "../src/types/country-select-props";

function App() {
  const handleGetCountry = (value?: CountryDataProps) => {};

  const CustomSelect = ({ countryList, language }: CustomizedSelectProps) => {
    return (
      <select className="modern-select">
        <option value="">Select a country</option>
        {countryList.map((country, index) => (
          <option key={index} value={country.code}>
            {country.label} {language}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <CountrySelectApi language="en" label="Depilate" callBack={handleGetCountry} customizedSelect={CustomSelect} selectedCountryCode="af" />
    </>
  );
}

export default App;
