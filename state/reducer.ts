import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Hole, Totals } from "./types";

const holes: Hole[] = Array.from({ length: 18 }, (_, index) => ({
    number: index + 1,
    points: 0,
    score: 0
}));

const halfway = Math.floor(holes.length / 2);

export const appState: AppState = {
    holes,
    handicap: 36,
    totals: {
        front: {
            points: 0,
            score: 0
        },
        back: {
            points: 0,
            score: 0
        }
    }
};

const appSlice = createSlice({
    name: "app",
    initialState: appState,
    reducers: {
        updateHole(state, action: PayloadAction<Hole>) {
            state.holes[action.payload.number - 1] = action.payload;

            state.totals = state.holes.reduce(
                (total, hole, index) => {
                    const key = index < halfway ? "front" : "back";
                    const result = {
                        [key]: {
                            points: total[key].points + hole.points,
                            score: total[key].score + hole.score
                        }
                    };

                    return {
                        ...total,
                        ...result
                    };
                },
                {
                    front: {
                        points: 0,
                        score: 0
                    },
                    back: {
                        points: 0,
                        score: 0
                    }
                } as Totals
            );
        },
        updateHandicap(state, action: PayloadAction<number>) {
            state.handicap = action.payload;
        }
    }
});

export const { updateHole, updateHandicap } = appSlice.actions;

export default appSlice.reducer;
