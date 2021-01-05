import { Button, CssBaseline, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Assignment } from "@material-ui/icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import { makeDarkTheme, makeLightTheme, theme } from "./theme";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
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

  const colorTheme = React.useMemo(
    () => (darkTheme ? makeDarkTheme : makeLightTheme),
    [darkTheme]
  );

  return (
    <Router>
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <ThemeProvider theme={colorTheme}>
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
              <Switch>
                <Route path="/" component={Dashboard} exact />
                <Route path="/tasks">
                  <div>Test.</div>
                </Route>
                <Route path="/projects/:id" component={Project}/>
                <Route path="*">
                  <Typography variant="h3" component="h1">
                    Error!
                  </Typography>
                  <br />
                  <Typography variant="h4" component="p">
                    404: Not Found
                  </Typography>
                </Route>
              </Switch>
            </Layout>
          </ThemeProvider>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
