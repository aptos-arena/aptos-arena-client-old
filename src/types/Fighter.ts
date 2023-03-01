export interface Fighter {
    collectionName: string;
    collectionImage: string;
    stats: Stats;
}

export const statMetrics = ['speed', 'strength', 'defense'] as const;

export type Stats = {
    [key in typeof statMetrics[number]]: number;
}