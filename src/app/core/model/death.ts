interface IDeath {
    death_id: number;
    death: string;
    cause: string;
    responsible: string;
    last_words: string;
    season: number;
    episode: number;
    number_of_deaths: number;
    img: string;
}

export class Death implements IDeath {
    death_id: number;
    death: string;
    cause: string;
    responsible: string;
    last_words: string;
    season: number;
    episode: number;
    number_of_deaths: number;
    img: string;
}