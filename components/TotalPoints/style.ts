import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiChip-avatar": {
            color: theme.palette.common.white
        }
    },
    points: {
        minWidth: "45px"
    }
}));
