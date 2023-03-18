import { Button } from "@mui/material";

export default function PathButton(props) {
  const handleClick = () => {
    window.location.href = `${props.path}`;
  };
  return (
    <Button variant="outlined" onClick={handleClick}>
      {props.value}
    </Button>
  );
}
