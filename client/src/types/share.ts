export interface Share {
    _id: string;
    square: number;
    code?: string;
    contractUntil?: Date | undefined;
    isShare?: boolean;
}