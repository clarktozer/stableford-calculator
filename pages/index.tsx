import {
    Chip,
    Container,
    Grid,
    TextField,
    Typography
} from "@material-ui/core";
import classnames from "classnames";
import React, { useState } from "react";
import { HoleInput } from "../components/HoleInput";
import { TotalPoints } from "../components/TotalPoints";
import { back9, front9 } from "../constants";
import { useStyles } from "./style";

export default function Home() {
    const [totalPoints, setTotalPoints] = useState(0);
    const [handicap, setHandicap] = useState("36");
    const classes = useStyles();

    const onChangeHandicap = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setHandicap(event.target.value);
    };

    return (
        <Container fixed className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className={classes.toolbar}>
                        <TextField
                            className={classes.handicap}
                            type="number"
                            variant="outlined"
                            size="small"
                            label="Handicap"
                            value={handicap}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={onChangeHandicap}
                        />
                        <div className={classes.grow}></div>
                        <TotalPoints value={totalPoints} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.sectionTitle}>
                        Front 9
                    </Typography>
                    {front9.map(hole => (
                        <HoleInput key={hole} hole={hole} handicap={handicap} />
                    ))}
                    <div className={classes.totalRow}>
                        <Chip
                            className={classnames(
                                classes.totalScore,
                                classes.total
                            )}
                            size="small"
                            color="primary"
                            label={0}
                        />
                        <Chip
                            className={classes.total}
                            size="small"
                            color="primary"
                            label={0}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.sectionTitle}>
                        Back 9
                    </Typography>
                    {back9.map(hole => (
                        <HoleInput key={hole} hole={hole} handicap={handicap} />
                    ))}
                    <div className={classes.totalRow}>
                        <Chip
                            className={classnames(
                                classes.totalScore,
                                classes.total
                            )}
                            size="small"
                            color="primary"
                            label={0}
                        />
                        <Chip
                            className={classes.total}
                            size="small"
                            color="primary"
                            label={0}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
