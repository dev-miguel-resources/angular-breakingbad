interface IEpisode {
    episode_id: number;
    title: string;
    season: number;
    air_date: string;
    characters: string[];
    episode: number;
    series: string;
    serieImg: string;
}

export class Episode implements IEpisode {
    episode_id: number;
    title: string;
    season: number;
    air_date: string;
    characters: string[];
    episode: number;
    series: string;
    serieImg: string;
}