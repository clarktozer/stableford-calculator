import { Chip, TextField } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { getStablefordPoints } from "../../utils";
import { useStyles } from "./style";
import { HoleDefinition, HoleInputProps } from "./types";

export const HoleInput: FC<HoleInputProps> = ({ onChange, hole, handicap }) => {
    const [points, setPoints] = useState(0);
    const [input, setInput] = useState<HoleDefinition>({
        par: "",
        score: "",
        stroke: ""
    });
    const classes = useStyles();

    const onChangeInput = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const type = event.target.getAttribute("data-type");

        if (type) {
            setInput(prev => ({
                ...prev,
                [type]: event.target.value
            }));
        }
    };

    useEffect(() => {
        const { stroke, score, par } = input;
        let value = 0;

        if (Number(stroke) && Number(score) && Number(par)) {
            value = getStablefordPoints(
                handicap,
                Number(stroke),
                Number(par),
                Number(score)
            );
        }

        setPoints(value);
        onChange(hole, value, Number(score));
    }, [input, hole, handicap, setPoints]);

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
                        min: 1,
                        max: 10,
                        ["data-type"]: "par"
                    }
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={input.par}
                onChange={onChangeInput}
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
                        max: 18,
                        ["data-type"]: "stroke"
                    }
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={input.stroke}
                onChange={onChangeInput}
            />
            <TextField
                className={classes.field}
                type="number"
                variant="outlined"
                size="small"
                label="Score"
                InputProps={{
                    inputProps: {
                        min: 1,
                        max: 100,
                        ["data-type"]: "score"
                    }
                }}
                InputLabelProps={{
                    shrink: true
                }}
                value={input.score}
                onChange={onChangeInput}
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
