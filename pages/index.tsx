import React from "react";

export default function Home() {
    return (
        <section>
            <div>
                Test Stableford (H: 9, S: 3, P: 4, S: 4):{" "}
                <b>{getStableford(9, 3, 4, 4)}</b>
            </div>
            <div>
                Test Stableford (H: 19, S: 1, P: 4, S: 4):{" "}
                <b>{getStableford(19, 1, 4, 4)}</b>
            </div>
        </section>
    );
}

export const getStableford = (
    handicap: number,
    stroke: number,
    par: number,
    score: number
) => {
    const differential = handicap % 18 >= stroke ? 1 : 0;
    const points = par + 2 - score + differential + handicap / 18;
    return points < 0 ? 0 : Math.floor(points);
};
