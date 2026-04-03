import {  Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useState, type ReactNode } from "react";

type CheckboxOpcaoProps = {
  habilitado?: boolean;
  children: ReactNode;
};

export function CheckboxOpcao({
  habilitado = false,
  children,
}: CheckboxOpcaoProps
) {  
  const [checked, setChecked] = useState(habilitado);
  return (
   
<FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      }
      label={
        <Typography
          sx={{
            textDecoration: checked ? 'none' : 'line-through',
            color: checked ? 'text.primary' : 'text.disabled',
            transition: 'all 0.2s ease',
          }}
        >
          {children}
        </Typography>
      }
    />

  );
}