import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    color: "black",
    display: "none",
    fontSize: 24,
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    color: "black",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  formControl: {
    color: "black",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [dark, setDark] = useState(false);
  const [bg, setbg] = useState("#FFFAFA");
  const [name, setname] = useState("");
  const handleChange = (event) => {
    setDark(event.target.checked);
    if (event.target.checked === true) {
      setbg("#fff");
    } else {
      setbg("#FFFAFA");
    }

    document.documentElement.classList.toggle("dark-mode");
    document.querySelectorAll(".inverted").forEach((result) => {
      result.classList.toggle("invert");
    });
  };
  const inputEvent = (event) => {
    setname(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: bg }} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <Button
              className={classes.title}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `/`;
              }}
            >
              OMDB
            </Button>
          </Typography>
          <div className={classes.search}>
            <form
              noValidate
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `/${name}`;
              }}
            >
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={inputEvent}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </div>
          <Box p={1.5} />
          <FormGroup>
            <FormControlLabel
              className={classes.formControl}
              control={
                <Switch
                  checked={dark}
                  onChange={handleChange}
                  aria-label="Dark switch"
                />
              }
              label={"Dark Mode"}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
