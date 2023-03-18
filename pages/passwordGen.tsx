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

function CheckboxList() {
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

  const handleCheckboxChange = (index: any) => (event: any) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = event.target.checked;
    setCheckboxes(newCheckboxes);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes[0]}
            onChange={handleCheckboxChange(0)}
          />
        }
        label="use special characters"
        labelPlacement="end"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes[1]}
            onChange={handleCheckboxChange(1)}
          />
        }
        label="use special characters"
        labelPlacement="end"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={checkboxes[2]}
            onChange={handleCheckboxChange(2)}
          />
        }
        label="use special characters"
        labelPlacement="end"
      />
      <Typography>
        Checked checkboxes: {checkboxes.filter(Boolean).length}
      </Typography>
    </>
  );
}

export default function passwordGenerator() {
  return (
    <>
      <Container>
        <HomeButton />
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
            width: "300px",
          }}
        >
          <Typography>Password generator page</Typography>
          <CheckboxList />
        </Box>
      </Container>
    </>
  );
}
