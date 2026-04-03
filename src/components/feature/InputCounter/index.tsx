import { Add, AddCircleOutline, Remove, RemoveCircleOutline, Search } from "@mui/icons-material";
import { Box, Container, IconButton, InputBase, Typography } from "@mui/material";
import { useState } from "react";

type CounterProps = {
  min?: number;
  max?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
};

export function InputCounter(
{
  min = 0,
  max = 10,
  initialValue = min,
  onChange,
}: CounterProps
) {  

  
  const [value, setValue] = useState<number>(initialValue);

  const handleIncrement = () => {
    if (value < max) {
      const newValue = value + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };


  return (
    
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <IconButton color="primary" disabled={value <= min} onClick={handleDecrement} sx={{background:'#E2EAFA', '&:hover': {background:'#E2EAFA'}}}>
        <Remove />
      </IconButton>

      <Box
        sx={{
          width: 56,
          height: 56,
          border: '1px solid',
          borderColor: 'grey.300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary"
        >
          {value}
        </Typography>
      </Box>

      <IconButton color="primary" disabled={value >= max} onClick={handleIncrement} sx={{background:'#E2EAFA', '&:hover': {background:'#E2EAFA'}}}>
        <Add/>
      </IconButton>
    </Box>

  );
}