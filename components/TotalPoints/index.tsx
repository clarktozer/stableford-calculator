import { Chip } from "@material-ui/core";
import React, { FC } from "react";
import { useStyles } from "./style";
import { TotalPointsProps } from "./types";

export const TotalPoints: FC<TotalPointsProps> = ({ value }) => {
    const classes = useStyles();

    return (
        <Chip
            label="Total Points"
            className={classes.root}
            avatar={
                <Chip
                    className={classes.points}
                    color="primary"
                    label={value}
                />
            }
            variant="default"
        />
    );
};
