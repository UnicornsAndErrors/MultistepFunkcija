import React from 'react';
import TextField from '@mui/material/TextField';
import Stepper from '@mui/material/Stepper';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];


const FirstStep = ({page, setPage, data, setData}) => {
   const Dalje = () => {
    setPage(() => page +1);
};
  return (
    <>
     <Box sx={{ width: '100%' }}>
      <Stepper  activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
           <StepLabel>{label}</StepLabel>
          </Step>
          
        ))}
      </Stepper>
      </Box>
      <div className="raspored">
     <div><TextField id="standard-basic" label="Ime" variant="standard" value={data.ime} onChange={(event) => setData({...data, ime:event.target.value})} /></div>
     <div><TextField id="standard-basic" label="Prezime" variant="standard" value={data.prezime} onChange={(event) =>setData({...data, prezime:event.target.value})}  /></div>
     <div><TextField id="standard-basic" label="E-mail" variant="standard" value={data.email} onChange={(event) =>setData({...data, email:event.target.value})} /></div>
     <Button variant="contained" onClick={Dalje}>Dalje</Button>
     </div>
    </>
  );
};

export default FirstStep;