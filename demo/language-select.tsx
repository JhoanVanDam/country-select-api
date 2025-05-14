import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { LanguageCode } from "../src/types/language-code";
import { Languages } from "./data/language-data";

// Idiomas con nombre amigable para mostrar

type LanguageSelectProps = {
  value: LanguageCode;
  onChange: (lang: LanguageCode) => void;
};

export const LanguageSelect = ({ value, onChange }: LanguageSelectProps) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onChange(event.target.value as LanguageCode);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select labelId="language-select-label" value={value} label="Language" onChange={handleChange}>
        {Languages.map((lang) => (
          <MenuItem key={lang.code} value={lang.code}>
            {lang.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
