import { UserPartial } from "../types/user.types";
import {
    
    UserCreationPayload,
    UserLoginPayload,
} from "../types/api.types";

export const addUser = async (newUser: UserCreationPayload) => {
    const payload = newUser;

    const request = await fetch(`http://localhost:8080/api/user/addUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(payload),
    });

    return request;
};

export const loginUser = async (login: UserLoginPayload) => {
    const payload = login;

    const request = await fetch(`http://localhost:8080/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(payload),
    });

    return request;
};

export const patchUser = async (update: UserPartial, token: string) => {
    const payload = update;

    const request = await fetch(`http://localhost:8080/api/user/profile`, {
        method: "PATCH",
        headers: {
            Authorization: token,
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(payload),
    });

    return request;
};

export const deleteUser = async (token: string) => {
    const request = await fetch(`http://localhost:8080/api/user/deleteUser`, {
        method: "DELETE",
        headers: {
            Authorization: token,
        },
    });

    return request;
};


