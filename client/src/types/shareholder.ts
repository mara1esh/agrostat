import { share } from './share'

export interface shareholder {
    _id: string;
    name: string;
    share: share;
}