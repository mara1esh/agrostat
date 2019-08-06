import { Share } from './share'

export interface Shareholder {
    _id: string;
    name: string;
    shares: [Share];
}