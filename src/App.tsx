import CountrySelect from "./country-select";
import type { CountryProps } from "./types/country-props";

function App() {
  const handleGetCountry = (value?: CountryProps) => {};
  return (
    <>
      <CountrySelect
        language="en"
        label="Depilate"
        callBack={handleGetCountry}
      />
    </>
  );
}

export default App;
