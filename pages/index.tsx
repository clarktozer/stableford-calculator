import { Container, Grid, TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

export default function Home() {
    const classes = useStyles();

    return (
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        className={classes.field}
                        type="number"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        className={classes.field}
                        type="number"
                        variant="outlined"
                        size="small"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
