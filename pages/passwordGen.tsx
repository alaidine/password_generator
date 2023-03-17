import { Button, Typography } from "@mui/material";

export default function passwordGenerator() {
  return (
    <>
      <Button onClick={() => (window.location.href = "/")} variant="outlined">
        Home
      </Button>
      <Typography>Password generator page</Typography>
    </>
  );
}
