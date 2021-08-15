import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    minHeight: '100%',
	  // width: '100%',
    margin: theme.spacing(4),
    // paddingVertical: 56,
    // paddingHorizontal: 26
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));