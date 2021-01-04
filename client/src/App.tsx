import {
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import Layout from "./Layout";
import { makeDarkTheme, makeLightTheme, theme } from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Assignment } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  table: {
    minWidth: 650,
  },
}));

function App() {
  const classes = useStyles();
  const [darkTheme, setDarkTheme] = React.useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkTheme = () => {
    setDarkTheme((darkTheme) => {
      localStorage.setItem("darkMode", `${!darkTheme}`);
      return !darkTheme;
    });
  };

  return (
    <Router>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={darkTheme ? makeDarkTheme : makeLightTheme}>
            <CssBaseline />
            <Layout
              toggleDarkTheme={toggleDarkTheme}
              darkTheme={darkTheme}
              links={[
                {
                  icon: <Assignment />,
                  text: "Tasks",
                  url: "/tasks",
                },
              ]}
            >
              <Typography variant="h4">Projects</Typography>
              <br />
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Frozen yoghurt
                      </TableCell>
                      <TableCell align="right">159</TableCell>
                      <TableCell align="right">6</TableCell>
                      <TableCell align="right">24</TableCell>
                      <TableCell align="right">4</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Layout>
          </ThemeProvider>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
