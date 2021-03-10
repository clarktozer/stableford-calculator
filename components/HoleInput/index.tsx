import { Chip, TextField } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useStyles } from "./style";
import { HoleInputProps } from "./types";

export const HoleInput: FC<HoleInputProps> = ({ hole, handicap }) => {
    const [par, setPar] = useState("");
    const [stroke, setStroke] = useState("");
    const [score, setScore] = useState("");
    const [points, setPoints] = useState("");
    const classes = useStyles();

    const onChangePar = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setPar(event.target.value);
    };

    return (
        <div className={classes.holeInput}>
            <Chip size="small" className={classes.label} label={hole} />
            <TextField
                className={classes.field}
                type="number"
                variant="outlined"
                size="small"
                label="Par"
                InputProps={{
                    inputProps: {
                        min: 3,
                        max: 6
                    }
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={par}
                onChange={onChangePar}
            />
            <TextField
                className={classes.field}
                type="number"
                variant="outlined"
                size="small"
                label="Stroke"
                InputProps={{
                    inputProps: {
                        min: 1,
                        max: 18
                    }
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={stroke}
            />
            <TextField
                className={classes.field}
                type="number"
                variant="outlined"
                size="small"
                label="Score"
                InputProps={{
                    inputProps: {
                        min: 0,
                        max: 100
                    }
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={score}
            />
            <Chip
                size="small"
                className={classes.points}
                color="primary"
                label={points}
            />
        </div>
    );
};
