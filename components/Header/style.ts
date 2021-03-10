import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },
    siteIcon: {
        marginRight: theme.spacing(2)
    },
    theme: {
        display: "flex"
    },
    heading: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    }
}));
