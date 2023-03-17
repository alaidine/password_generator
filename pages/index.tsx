import { Box, Button, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{
            margin: "auto",
            display: "flex",
            gap: "6px",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <Button
            onClick={() => (window.location.href = "/passwordGen")}
            variant="outlined"
            sx={{ color: "black" }}
          >
            Password generator
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/safetyChecker";
            }}
            variant="outlined"
            sx={{ color: "black" }}
          >
            Safety checker
          </Button>
        </Box>
      </Container>
    </>
  );
}
