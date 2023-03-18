import PathButton from "@/components/PathButton";
import { Box, Container, Typography } from "@mui/material";

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
          <PathButton path="/passwordGen" value="Password Generator" />
          <PathButton path="/safetyChecker" value="Safety Checker" />
        </Box>
      </Container>
    </>
  );
}
