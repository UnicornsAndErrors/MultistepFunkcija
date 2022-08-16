import React from 'react'
import Stepper from '@mui/material/Stepper';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

const ThirdStep = ({page, setPage, data}) => {

    const Dalje = () => {
        setPage(() => page +1);
      };
      const Nazad = () => {
        setPage(() => page -1);
      };

  return (
    <>
    <Box sx={{ width: '100%' }}>
     <Stepper  activeStep={2} alternativeLabel>
       {steps.map((label) => (
         <Step key={label}>
         <StepLabel>{label}</StepLabel>
         </Step>
         
       ))}
     </Stepper>
     </Box>
     <div className="raspored2">
     <List>
        <ListItem>
            <ListItemText primary="Ime" secondary={data.ime}/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Prezime" secondary={data.prezime}/>
        </ListItem>
        <ListItem>
            <ListItemText primary="E-Mail" secondary={data.email}/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Zanimanje" secondary={data.zanimanje}/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Grad" secondary={data.grad}/>
        </ListItem>
        <ListItem>
            <ListItemText primary="Godine" secondary={data.godine}/>
        </ListItem>
     </List>
     <Button variant="contained" onClick={Dalje}>Dalje</Button>
     <Button variant="contained" onClick={Nazad}>Nazad</Button>
     </div>
    </>
  );
};

export default ThirdStep;