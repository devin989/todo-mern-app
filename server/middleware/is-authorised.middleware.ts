import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { secretOrKey } from "../../server/utils/secrets";
import { UserToken } from "../../client/src/types/user.types";
import { Notifications } from "../../client/src/constants/notifications";

export const isAuthorisedMiddleware = function (
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.headers.authorization) {
        res.header("WWW-Authenticate: Bearer realm='mern-todo-app'")
            .status(401)
            .json(Notifications.UserNotAuthorized);

        return;
    }

    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, secretOrKey, (err, authorizedData) => {
        if (err) {
            res.sendStatus(500);
            return;
        }

        if (!authorizedData) {
            res.header("WWW-Authenticate: Bearer realm='mern-todo-app'")
                .status(401)
                .json(Notifications.UserNotAuthorized);
            return;
        } else {
            res.locals.authorizedData = authorizedData as UserToken;
            return next();
        }
    });

    return;
};
