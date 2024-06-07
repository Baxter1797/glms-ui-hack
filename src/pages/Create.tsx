import { Autocomplete, Box, Button, Paper, TextField } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import React, { useRef, useState } from 'react';
import { Upload } from '@mui/icons-material';

const options = [
    { label: 'Jersey', value: 1 },
    { label: 'Channel Islands', value: 2 },
    { label: 'United Kingdom', value: 3 },
    // Add more options as needed
  ];

  const options2 = [
    { label: 'Luke Baxter (9391768)', value: 1 },
    { label: 'Adil Rahman (9880324)', value: 2 },
    { label: 'Naruca Appiah (8460928)', value: 3 },
    // Add more options as needed
  ];

export default function Create() {
    const [value, setValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');
    const [value1, setValue1] = React.useState(null);
    const [inputValue1, setInputValue1] = React.useState('');
    const fileInput = useRef(null);
    const [fileName, setFileName] = useState('');

    const handleUploadClick = () => {
        if (fileInput.current) {
          fileInput.current.click();
        }
      };

      const handleFileChange = (event) => {
        setFileName(event.target.files[0].name);
      };
  
    return (
        <Paper elevation={4} sx={{ padding: 2 }}>
            <Box display={'inline-flex'} width={'100%'} gap={4} justifyContent={'space-between'}>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    }}
                    options={options}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} label="Jurisdiction" variant="outlined" />}
                    sx={{flexGrow: 0.5}}
                    />
                <Autocomplete
                    value={value1}
                    onChange={(event, newValue) => {
                    setValue1(newValue);
                    }}
                    inputValue={inputValue1}
                    onInputChange={(event, newInputValue) => {
                    setInputValue1(newInputValue);
                    }}
                    options={options2}
                    getOptionLabel={(option) => option.label}
                    renderInput={(params) => <TextField {...params} label="Owner" variant="outlined" />}
                    sx={{flexGrow: 0.5}}
                />
            </Box>
            <Box marginTop={'10px'}>
                <TextField fullWidth multiline required placeholder='Description'></TextField>
            </Box>
            <Box marginTop={'14px'} display={'flex'} justifyContent={'space-between'}>
                <input type="file" ref={fileInput} style={{ display: 'none' }} onChange={handleFileChange}/>
                <Button onClick={handleUploadClick} startIcon={<UploadIcon />} variant='contained'>Upload</Button>
                {fileName && <div>Selected file: {fileName}</div>}
                <Button variant='contained'>Submit</Button>
            </Box>
        </Paper>
    )
}