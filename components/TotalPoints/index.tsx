import { Chip } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./style";
import { TotalPointsProps } from "./types";

export const TotalPoints: FC<TotalPointsProps> = ({ points, label }) => {
    const classes = useStyles();

    return (
        <Chip
            label={label}
            className={classes.root}
            avatar={
                <Chip
                    className={classes.points}
                    color="secondary"
                    label={points}
                />
            }
            variant="default"
        />
    );
};
