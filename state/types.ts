export interface AppState {
    holes: Hole[];
    handicap: number;
    totals: Totals;
}

export interface Hole {
    number: number;
    points: number;
    score: number;
}

export interface Totals {
    front: {
        points: number;
        score: number;
    };
    back: {
        points: number;
        score: number;
    };
}
