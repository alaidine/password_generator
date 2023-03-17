import { Button, Typography } from "@mui/material";

export default function safetyChecker() {
  return (
    <>
      <Button onClick={() => (window.location.href = "/")} variant="outlined">
        Home
      </Button>
      <Typography>Safety checker page</Typography>
    </>
  );
}
