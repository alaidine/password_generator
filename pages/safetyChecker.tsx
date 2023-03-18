import HomeButton from "@/components/HomeButton";
import { Container, Typography } from "@mui/material";

export default function safetyChecker() {
  return (
    <>
      <Container>
        <HomeButton />
        <Typography>Safety checker page</Typography>
      </Container>
    </>
  );
}
