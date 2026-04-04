import { Search } from "@mui/icons-material";
import { Box, InputBase, Step, StepLabel, Stepper, styled} from "@mui/material";


interface OrderStepperProps {
  posicao: number; // posição atual (0, 1, 2, 3...)
}

const steps = ['Pedidos', 'Entrega', 'Pagamento', 'Finalizar'];


export function InputStepper({ posicao }: OrderStepperProps) {  
  return (
    <Box> 
      <Stepper activeStep={posicao} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}