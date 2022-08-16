import React from 'react'
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

const SecondStep = ({page, setPage, data, setData}) => {
const Dalje = () => {
  setPage(() => page +1);
};
const Nazad = () => {
  setPage(() => page -1);
};



  return (
    <>
    <Box sx={{ width: '100%' }}>
     <Stepper  activeStep={1} alternativeLabel>
       {steps.map((label) => (
         <Step key={label}>
         <StepLabel>{label}</StepLabel>
         </Step>
         
       ))}
     </Stepper>
     </Box>
     <div className="raspored1">
    <div><TextField id="standard-basic" label="Grad" variant="standard" value={data.grad} onChange={(event) =>setData({...data, grad:event.target.value})} /></div>
    <div><TextField id="standard-basic" label="Zanimanje" variant="standard" value={data.zanimanje} onChange={(event) =>setData({...data, zanimanje:event.target.value})}/></div>
    <div><TextField id="standard-basic" label="Godine" variant="standard" value={data.godine} onChange={(event) =>setData({...data, godine:event.target.value})} /></div>
    <Button variant="contained" onClick={Dalje}>Dalje</Button>
    <Button variant="contained" onClick={Nazad}>Nazad</Button>
    </div>
   </>
  )
}

export default SecondStep