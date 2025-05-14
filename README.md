# 🌍 country-select-api

**A customizable multilingual country select component for React with emoji flags.**

This library provides a simple and elegant country selector with support for internationalized labels, emoji flags, and full customization via React components.

![demo](https://github.com/JhoanVanDam/country-select-api/blob/mui-demo/demo/select-country-api-demo.gif)

---

## ✨ Features

- 🌐 Multi-language country labels
- 🏳️ Emoji flags for countries
- ⚛️ React-based component
- 🎨 Supports full UI customization
- 📦 Lightweight and easy to use

---

## 📦 Installation

```bash
npm install country-select-api
```

or with pnpm:

```bash
pnpm add country-select-api
```

---

## 🚀 Usage

```tsx
import { useCountries } from "country-select-api";

const { countryList, findByAlpha2, codeToFlag } = useCountries("en");

console.log(countryList); // All countries with labels in English
console.log(findByAlpha2("US")); // Single country by code
console.log(codeToFlag("US")); // 🇺🇸
```

---

```tsx
import React from "react";
import { CountrySelect } from "country-select-api";

const App = () => {
  return <CountrySelect language="en" callBack={(selectedCountry) => console.log(selectedCountry)} selectedCountryCode="US" />;
};

export default App;
```

---

---

## 📚 Real-world Example with MUI

```tsx
import { Autocomplete, TextField } from "@mui/material";
import { useCountries } from "country-select-api";
import { useLanguageStore } from "global/stores/language-store";

export const CountrySelect = () => {
  const { language } = useLanguageStore();
  const { countryList, codeToFlag } = useCountries(language);

  const handleChange = (_: any, value: any) => {
    console.log(value);
  };

  return (
    <Autocomplete
      options={countryList}
      getOptionLabel={(option) => `${codeToFlag(option.code)} ${option.label}`}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Country" placeholder="Select the country" />}
      sx={{ width: "100%" }}
    />
  );
};
```

---

## ⚙️ Props

| Prop                  | Type                                                | Required | Description                                                  |
| --------------------- | --------------------------------------------------- | -------- | ------------------------------------------------------------ |
| `language`            | `LanguageCode` (e.g., `"en"`, `"es"`, etc.)         | ✅       | Language code for country labels.                            |
| `selectedCountryCode` | `string`                                            | ❌       | Two-letter country code to preselect (e.g., `"US"`).         |
| `label`               | `string`                                            | ❌       | Label for the select field. Default: `"Select a country"`.   |
| `callBack`            | `(value: CountryDataProps) => void`                 | ❌       | Callback when a country is selected.                         |
| `customizedSelect`    | `(props: { countryList, language }) => JSX.Element` | ❌       | Render your own custom select UI. Overrides the default one. |

---

## 🌐 Supported Languages

Supports over **40 languages** including:

`en`, `es`, `fr`, `de`, `it`, `zh`, `ar`, `ja`, `ko`, `pt`, `ru`, `tr`, `sv`, `fi`, `nl`, `pl`, and more.

---

## 🧱 Advanced Customization

You can fully replace the default UI using the `customizedSelect` prop:

```tsx
<CountrySelect
  language="fr"
  customizedSelect={({ countryList }) => (
    <ul>
      {countryList.map((c) => (
        <li key={c.code}>{c.label}</li>
      ))}
    </ul>
  )}
/>
```

---

## 📁 Folder Structure (Simplified)

```
src/
├── country-select.tsx       # Main component
├── data/
│   └── world.json           # Country data with translations
├── hooks/
│   └── data-country-hook.tsx
├── types/
│   ├── country-data-props.tsx
│   ├── country-select-props.tsx
│   └── language-code.tsx
├── util/
│   └── code-to-flag.tsx     # Flag emoji utility
```

---

## 🧪 Example of `CountryDataProps`

```ts
{
  id: 840,
  code: "US",
  code2: "USA",
  label: "United States"
}
```

---

## 📜 License

MIT © [JhoanVanDam](https://github.com/JhoanVanDam)

---

## 🛠 Built with

- ⚛️ React 19
- 🧩 TypeScript
- ⚡ Vite
- 📏 ESLint
