export interface LoginType{
    id: number,
    email: string,
    name: string,
    password: string
}

export type SingUpType = Omit<LoginType, "id">

export interface Image {
    id: number;
    url: string;
};

export interface Car {
    id: number;
    name: string;
    description: string;
    brand: string;
    model: string;
    price: number;
    color: string;
    motorType: string;
    power: number;
    placeNumber: number;
    status: string;
    type: string;
    images: Image[];
};

export type CarRequest = Omit<Car, "id" | "images"> 