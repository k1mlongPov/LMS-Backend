import {Role} from "../../generated/prisma/enums";

export interface UserParams {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: Role,
}