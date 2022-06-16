import { User } from "@prisma/client";
import { patchUser } from "../../infrastructure/users-repository";
import { UserUpdateData } from "../../types";

export default async (id:number, data: UserUpdateData): Promise<User> => await patchUser(id, data);
