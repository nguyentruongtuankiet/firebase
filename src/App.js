import { TextField, Button } from '@mui/material';

function App() {
  return (
    <>
        <TextField variant="outlined" label="Phone number" />
        <Button variant="contained">SEND OTP</Button>
        <TextField variant="outlined" label="OTP" />
        <Button variant="contained">VERIFY OTP</Button>
    </>
  );
}

export default App;
