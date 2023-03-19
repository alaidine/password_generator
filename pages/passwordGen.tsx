import HomeButton from "@/components/HomeButton";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";

function Generator() {
  const [checkboxes, setCheckboxes] = useState([false, false]);

  const handleCheckboxChange = (index: any) => (event: any) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = event.target.checked;
    setCheckboxes(newCheckboxes);
  };

  let [generatedPassword, setGeneratedPassword] = useState("");
  const generatePassword = () => {
    const chars: string = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-={}|[]\\:;"'<>,.?/~"`;
    if (checkboxes[0] == false && checkboxes[1] == false) {
      alert("you have to check a condition");
      setGeneratedPassword("");
      return;
    }
    if (checkboxes[0] == true && checkboxes[1] == true) {
      alert("you can't check both conditions");
      setGeneratedPassword("");
      return;
    }
    const length = checkboxes[0] == true ? 8 : 16;

    let output = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      output += chars[randomIndex];
    }

    setGeneratedPassword(output);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="left"
        minHeight="100vh"
        sx={{
          margin: "auto",
          display: "flex",
          gap: "6px",
          flexDirection: "column",
          width: "400px",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxes[0]}
              onChange={handleCheckboxChange(0)}
            />
          }
          label="short password"
          labelPlacement="end"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxes[1]}
              onChange={handleCheckboxChange(1)}
            />
          }
          label="long password"
          labelPlacement="end"
        />
        <Button variant="outlined" onClick={generatePassword}>
          Generate
        </Button>
        <Typography>Generated password: {generatedPassword}</Typography>
      </Box>
    </>
  );
}

export default function passwordGenerator() {
  return (
    <>
      <Container>
        <HomeButton />
        <Generator />
      </Container>
    </>
  );
}
