import { Container, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { HoleInput, TotalPoints } from "../components";
import { BackNine, FrontNine, PointsState } from "../constants";
import { useStyles } from "../styles/page";

export default function Home() {
    const [totalPoints, setTotalPoints] = useState(PointsState);
    const [handicap, setHandicap] = useState(36);
    const halfway = Math.floor(totalPoints.length / 2);
    const classes = useStyles();

    const onChangeHandicap = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value);

        if (!isNaN(value)) {
            setHandicap(value);
        }
    };

    const onHoleChanged = (hole: number, points: number) => {
        if (hole > 0) {
            const newTotal = totalPoints.map((item, index) => {
                if (index === hole - 1) {
                    return points;
                }
                return item;
            });

            setTotalPoints(newTotal);
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
                            value={totalPoints.reduce(
                                (total, points) => total + points,
                                0
                            )}
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
                        <TotalPoints
                            label="In"
                            value={totalPoints.reduce(
                                (total, points, index) => {
                                    if (index < halfway) {
                                        return total + points;
                                    }

                                    return total;
                                },
                                0
                            )}
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
                        <TotalPoints
                            label="Out"
                            value={totalPoints.reduce(
                                (total, points, index) => {
                                    if (index >= halfway) {
                                        return total + points;
                                    }

                                    return total;
                                },
                                0
                            )}
                        />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
