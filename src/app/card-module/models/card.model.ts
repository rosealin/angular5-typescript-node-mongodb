export interface Card {
    id: string,
    text?: string,
    name?: string,
    age?: number,
    interests?: string[],
    userInfo?: {}
}

export interface PayloadCard {
    text?: string,
    name?: string,
    age?: number,
    interests?: string[],
    userInfo?: {}
}