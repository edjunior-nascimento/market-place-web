import { Box, Button } from "@mui/material";

interface ButtonRadioProps {
  label: string;
}

export function ButtonRadio({ label }: ButtonRadioProps) {  
  return (
    <Box>
      <Button variant="contained" disableElevation>
        {label}
      </Button>
    </Box>
  );
}