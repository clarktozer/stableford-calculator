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
