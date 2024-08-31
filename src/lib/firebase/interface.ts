export interface DataLogin {
    email: string;
    password: string;
}

export interface DataRegister {
    username: string;
    email: string;
    password: string;
    admin: string;
    createdAt: Date;
}