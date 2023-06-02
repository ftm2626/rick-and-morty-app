import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { ChangeTheme } from "logic/store/appSlice";
import { useDispatch } from "react-redux";

function NavbarComp() {
  const dispatch = useDispatch();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rick And Morty
        </Typography>
        <Button onClick={() => dispatch(ChangeTheme())} color="inherit">
          Click Me Morty!
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarComp;
