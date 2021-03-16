import {
    Chip,
    Container,
    Grid,
    TextField,
    Typography
} from "@material-ui/core";
import classnames from "classnames";
import React, { useReducer } from "react";
import { HoleInput, TotalPoints } from "../components";
import { BackNine, FrontNine } from "../constants";
import appReducer, {
    appState,
    updateHandicap,
    updateHole
} from "../state/reducer";
import { useStyles } from "../styles/page";

export default function Home() {
    const classes = useStyles();
    const [state, dispatch] = useReducer(appReducer, appState);
    const { handicap, totals } = state;

    const onChangeHandicap = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value);

        if (!isNaN(value)) {
            dispatch(updateHandicap(value));
        }
    };

    const onHoleChanged = (hole: number, points: number, score: number) => {
        if (hole > 0) {
            dispatch(
                updateHole({
                    number: hole,
                    points,
                    score
                })
            );
        }
    };

    return (
        <Container maxWidth="lg" className={classes.container}>
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
                        <TotalPoints
                            label="Total Points"
                            points={totals.front.points + totals.back.points}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.sectionTitle}>
                        Front 9
                    </Typography>
                    {FrontNine.map(hole => (
                        <HoleInput
                            key={hole}
                            hole={hole}
                            handicap={handicap}
                            onChange={onHoleChanged}
                        />
                    ))}
                    <div className={classes.totalRow}>
                        <span className={classes.subTotalLabel}>In</span>
                        <Chip
                            className={classnames(
                                classes.total,
                                classes.subTotalScore
                            )}
                            color="primary"
                            label={totals.front.score}
                            size="small"
                        />
                        <Chip
                            className={classes.total}
                            color="secondary"
                            label={totals.front.points}
                            size="small"
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.sectionTitle}>
                        Back 9
                    </Typography>
                    {BackNine.map(hole => (
                        <HoleInput
                            key={hole}
                            hole={hole}
                            handicap={handicap}
                            onChange={onHoleChanged}
                        />
                    ))}
                    <div className={classes.totalRow}>
                        <span className={classes.subTotalLabel}>Out</span>
                        <Chip
                            className={classnames(
                                classes.total,
                                classes.subTotalScore
                            )}
                            color="primary"
                            label={totals.back.score}
                            size="small"
                        />
                        <Chip
                            className={classes.total}
                            color="secondary"
                            label={totals.back.points}
                            size="small"
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
