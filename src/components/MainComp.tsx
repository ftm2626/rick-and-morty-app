import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../logic/graphql/gql";
import {
  List,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  CircularProgress,
} from "@mui/material";
import { green } from "@mui/material/colors";
import UseModal from "../logic/hooks/useModal";
import NavbarComp from "./NavbarComp";
import ModalComp from "./ModalComp";
import { useSelector } from "react-redux";
import { RootState } from "logic/store/config";
import ListItemComp from "./ListItemComp";

export default function MainComp() {
  const { toggleModal, setToggleModal, characterId, changeModalInfo } =
    UseModal();
  const { list } = useSelector((store: RootState) => store.list);
  const { theme } = useSelector((store: RootState) => store.app);
  const { loading, data, error } = useQuery(GET_CHARACTERS);
  const darkTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="success" />
      </Box>
    );
  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        An Error occurred! Please reload the page!
      </Box>
    );
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavbarComp />
      <Grid
        gap={1}
        container
        justifyContent="center"
        alignItems="center"
        paddingX={8}
        paddingTop={10}
        sx={{ height: "100%" }}
      >
        <Grid
          item
          xs={12}
          md={5}
          height={{ xs: "35vh", md: "70vh" }}
          sx={{
            overflowY: "scroll",
            borderRadius: 2,
            borderWidth: 1,
            borderColor: green[400],
            borderStyle: "solid",
          }}
        >
          <nav aria-label="api-list">
            <List>
              {data?.characters.results.map((item) => (
                <ListItemComp item={item} onInfo={changeModalInfo} type="api" />
              ))}
            </List>
          </nav>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          height={{ xs: "35vh", md: "70vh" }}
          sx={{
            overflowY: "scroll",
            borderRadius: 2,
            borderWidth: 1,
            borderColor: green[400],
            borderStyle: "solid",
          }}
        >
          {list.length <= 0 ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              Add to the citadel!
            </Box>
          ) : (
            <nav aria-label="store-list">
              <List>
                {list.map((item) => (
                  <ListItemComp item={item} type="store" />
                ))}
              </List>
            </nav>
          )}
        </Grid>
      </Grid>
      {toggleModal && (
        <ModalComp
          toggle={toggleModal}
          setToggle={setToggleModal}
          id={+characterId}
        />
      )}
    </ThemeProvider>
  );
}
