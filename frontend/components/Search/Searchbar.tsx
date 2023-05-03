import { TextField } from "@mui/material";

interface Props {
  placeholder?: string;
  onChange?: any;
  value?: string;
}

function Searchbar({ placeholder, onChange, value }: Props) {
  return (
    <TextField
      className="w-full"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      variant="outlined"
      size="small"
    />
  );
}

export default Searchbar;