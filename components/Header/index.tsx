import {
    AppBar,
    Icon,
    IconButton,
    NoSsr,
    Toolbar,
    Tooltip,
    Typography
} from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./style";
import { HeaderProps } from "./types";

export const Header: FC<HeaderProps> = ({ onToggleTheme, isDarkTheme }) => {
    const classes = useStyles();

    return (
        <AppBar position="sticky" color="inherit" variant="outlined">
            <Toolbar>
                <Icon className={classes.siteIcon}>golf_course</Icon>
                <Typography className={classes.heading}>
                    Stableford Calculator
                </Typography>
                <div className={classes.grow} />
                <div className={classes.theme}>
                    <NoSsr>
                        <Tooltip title="Toggle light/dark theme">
                            <IconButton color="inherit" onClick={onToggleTheme}>
                                {isDarkTheme ? (
                                    <Icon>brightness_high</Icon>
                                ) : (
                                    <Icon>brightness_4</Icon>
                                )}
                            </IconButton>
                        </Tooltip>
                    </NoSsr>
                </div>
            </Toolbar>
        </AppBar>
    );
};
