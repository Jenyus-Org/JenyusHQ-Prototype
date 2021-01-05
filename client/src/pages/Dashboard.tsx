import {
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import UserAvatar from "../components/user/UserAvatar";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
  gridItem: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    height: "250px",
    overflowX: "auto",
  },
  header: {
    marginBottom: theme.spacing(2),
  },
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Typography variant="h5" className={classes.header}>
            Unread Messages
          </Typography>
          <Paper className={classes.paper}>
            <List>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridItem}>
          <Typography variant="h5" className={classes.header}>
            Users
          </Typography>
          <Paper className={classes.paper}>
            <List>
              <ListItem button>
                <div className={classes.avatar}>
                  <UserAvatar status="OFFLINE" alt="Dominik Berger">
                    DB
                  </UserAvatar>
                </div>
                <ListItemText primary="Doemuu" />
              </ListItem>
              <ListItem button>
                <div className={classes.avatar}>
                  <UserAvatar status="ONLINE" alt="RaviAnand Mohabir">
                    RM
                  </UserAvatar>
                </div>
                <ListItemText primary="Dan6erbond" />
              </ListItem>
              <ListItem button>
                <div className={classes.avatar}>
                  <UserAvatar status="ONLINE" alt="RaviAnand Mohabir">
                    RM
                  </UserAvatar>
                </div>
                <ListItemText primary="Dan6erbond" />
              </ListItem>
              <ListItem button>
                <div className={classes.avatar}>
                  <UserAvatar status="ONLINE" alt="RaviAnand Mohabir">
                    RM
                  </UserAvatar>
                </div>
                <ListItemText primary="Dan6erbond" />
              </ListItem>
              <ListItem button>
                <div className={classes.avatar}>
                  <UserAvatar status="ONLINE" alt="RaviAnand Mohabir">
                    RM
                  </UserAvatar>
                </div>
                <ListItemText primary="Dan6erbond" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.gridItem}>
        <Typography variant="h4" className={classes.header}>
          Projects
        </Typography>
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
      </Grid>
    </>
  );
}

export default Dashboard;
