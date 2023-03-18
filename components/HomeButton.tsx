import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function HomeButton() {
  const goHome = () => {
    window.location.href = "/";
  };
  return (
    <IconButton onClick={goHome} edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
  );
}
