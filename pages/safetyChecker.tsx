import HomeButton from "@/components/HomeButton";
import { useState } from "react";
import { Box, Container, Input, Typography, Button } from "@mui/material";

function hasCapitalLetters(str: string): boolean {
  const regexCapital = /[A-Z]/;
  return regexCapital.test(str);
}

function hasSpecialChars(str: string): boolean {
  const regexSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  return regexSpecial.test(str);
}

function hasNumbers(str: string): boolean {
  const regexNumber = /[0-9]/;
  return regexNumber.test(str);
}

export default function safetyChecker() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [safetyLevel, setSafetyLevel] = useState("");
  const changeSafetyLevel = () => {
    if (inputValue.length >= 8) {
      if (
        hasNumbers(inputValue) ||
        hasCapitalLetters(inputValue) ||
        hasSpecialChars(inputValue)
      )
        setSafetyLevel("good");
      else setSafetyLevel("medium");
    } else setSafetyLevel("weak");
  };

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
          <Typography>Safety checker page</Typography>
          <Input value={inputValue} onChange={handleInputChange} />
          <Button onClick={changeSafetyLevel}>Check</Button>
          <Typography>Safety level: {safetyLevel}</Typography>
        </Box>
      </Container>
    </>
  );
}
