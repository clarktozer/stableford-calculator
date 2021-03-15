import {
    Chip,
    Container,
    Grid,
    TextField,
    Typography
} from "@material-ui/core";
import classnames from "classnames";
import React, { useMemo, useState } from "react";
import { HoleInput, TotalPoints } from "../components";
import { BackNine, FrontNine, PointsState } from "../constants";
import { useStyles } from "../styles/page";

export default function Home() {
    const classes = useStyles();
    const [totals, setTotals] = useState(PointsState);
    const halfway = Math.floor(totals.length / 2);
    const [handicap, setHandicap] = useState(36);

    const totalPoints = useMemo(
        () => totals.reduce((total, current) => total + current.points, 0),
        [totals]
    );

    const inPoints = useMemo(
        () =>
            totals.reduce(
                (total, current, index) => {
                    if (index < halfway) {
                        return {
                            points: total.points + current.points,
                            score: total.score + current.score
                        };
                    }

                    return total;
                },
                {
                    points: 0,
                    score: 0
                }
            ),
        [totals]
    );

    const outPoints = useMemo(
        () =>
            totals.reduce(
                (total, current, index) => {
                    if (index >= halfway) {
                        return {
                            points: total.points + current.points,
                            score: total.score + current.score
                        };
                    }

                    return total;
                },
                {
                    points: 0,
                    score: 0
                }
            ),
        [totals]
    );

    const onChangeHandicap = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value);

        if (!isNaN(value)) {
            setHandicap(value);
        }
    };

    const onHoleChanged = (hole: number, points: number, score: number) => {
        if (hole > 0) {
            const newTotal = totals.map((item, index) => {
                if (index === hole - 1) {
                    return {
                        points,
                        score
                    };
                }
                return item;
            });

            setTotals(newTotal);
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
                            points={totalPoints}
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
                            label={inPoints.score}
                            size="small"
                        />
                        <Chip
                            className={classes.total}
                            color="secondary"
                            label={inPoints.points}
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
                            label={outPoints.score}
                            size="small"
                        />
                        <Chip
                            className={classes.total}
                            color="secondary"
                            label={outPoints.points}
                            size="small"
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
