import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    grow: {
        flexGrow: 1
    },
    toolbar: {
        display: "flex",
        alignItems: "center"
    },
    handicap: {
        marginRight: theme.spacing(1),
        maxWidth: "140px"
    },
    sectionTitle: {
        marginBottom: theme.spacing(3)
    },
    totalScore: {
        marginRight: theme.spacing(2)
    },
    total: {
        minWidth: "35px",
        textAlign: "center"
    },
    totalRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
    },
    subTotalLabel: {
        marginRight: theme.spacing(1)
    },
    subTotalScore: {
        marginRight: theme.spacing(1)
    }
}));
