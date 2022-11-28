import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SendToRecipient = () => {

  const history = useHistory();
  const newContractDetails = useSelector(store => store.contract.newContractDetails);
  const user = useSelector((store) => store.user);

  // date formatting for pickup date
  const pickupDate = new Date(newContractDetails.pickupDate);
  const formattedPickupDate = pickupDate.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });

  // date formatting for contract deadline
  const contractDeadline = new Date(newContractDetails.contractDeadline);
  const formattedContractDeadline = contractDeadline.toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });

  return (
    <div>
      
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Typography variant="h3">Send to Recipient:</Typography>
          <TextField
            sx={{width: 300, marginLeft: 2}}
            helperText="Enter Recipient's Email"
            label="example@gmail.com"
          />
        </Box>
        <br />
        <br />
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Paper elevation={10} variant="outlined" sx={{width: 700, padding: 2, display: 'flex', flexDirection: 'column'}}>
            <Typography variant="h6" sx={{textAlign: 'center'}}>{newContractDetails.contractTitle} Agreement</Typography>
            {/* user.username will be changed to user.legalName when registration/login is working */}
            <Typography sx={{textAlign: 'center'}}>{user.username} (the "{newContractDetails.firstPartyType}") does hereby sell, assign, and transfer to</Typography>
            <Typography sx={{textAlign: 'center'}}>*recipient legal name* (the "{newContractDetails.secondPartyType}") the following property:</Typography>
            <br />
            <Typography sx={{textAlign: 'center'}}>{newContractDetails.itemName}: {newContractDetails.itemDescription}</Typography>
            <br />
            <Typography sx={{textAlign: 'center'}}>for a TOTAL AMOUNT OF ${newContractDetails.itemPrice}</Typography>
            <br />
            <Typography sx={{textAlign: 'center'}}>The seller warrants that they are the legal owner of the property and that it is being transferred to the buyer free and clear of any liens or encumbrances.</Typography>
            <Typography sx={{textAlign: 'center'}}>The above property is sold on an "AS IS" basis. The seller makes no warranites, express or implied (except as specially stated in this document).</Typography>
            <br />
            <Typography sx={{textAlign: 'center'}}>Notes regarding the above property:</Typography>
            <Typography sx={{textAlign: 'center'}}>{newContractDetails.contractNotes}</Typography>
            <br />
            <Typography sx={{textAlign: 'center'}}>The above property will be transferred on: {formattedPickupDate}</Typography>
            <Typography sx={{textAlign: 'center'}}>The seller and buyer will meet in {newContractDetails.pickupLocation} to transfer the above property.</Typography>
            <br />
            <Typography sx={{textAlign: 'center'}}>{newContractDetails.firstPartyType} Signature: {newContractDetails.firstPartySignature}</Typography>
            <Typography sx={{textAlign: 'center'}}>{newContractDetails.secondPartyType} Signature: {newContractDetails.secondPartySignature}</Typography>
          </Paper>
      </Container>
    </div>
  );

}

export default SendToRecipient;