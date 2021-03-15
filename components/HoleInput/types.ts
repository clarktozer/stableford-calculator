export interface HoleInputProps {
    handicap: number;
    hole: number;
    onChange: (hole: number, points: number, score: number) => void;
}

export interface HoleDefinition {
    par: string;
    stroke: string;
    score: string;
}
