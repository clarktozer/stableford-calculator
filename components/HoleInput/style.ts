import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    field: {
        marginRight: theme.spacing(1),
        flex: 1
    },
    label: {
        marginRight: theme.spacing(1),
        minWidth: "35px",
        textAlign: "center"
    },
    points: {
        minWidth: "35px",
        textAlign: "center"
    },
    holeInput: {
        marginBottom: theme.spacing(3),
        display: "flex",
        alignItems: "center"
    }
}));
