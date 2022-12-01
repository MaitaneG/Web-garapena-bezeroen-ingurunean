import { Jarduera } from './jarduera'

export interface Kluba {
    id: number;
    name: string;
    cover_photo_small: string;
    sport_type: string;
    private: boolean;
    member_count: number;
    description: string;
    club_type: string;
    jarduerak: Jarduera[]
}
