import express, { Router, Request, Response } from "express";

import { Notifications } from "../../../../client/src/constants/notifications";
import UserCollection from "../../../models/User/user-collection.model";
import validateRegistration from "../../../utils/validations/validate-registration";

const router: Router = express.Router();

const addUser = (req: Request, res: Response): void => {
    const { errors, isValid } = validateRegistration(req.body);

    if (!isValid) {
        if (Object.keys(errors).length === 0) {
            res.status(500).json(Notifications.UserAddFailed);
            return;
        }

        const firstError = Object.values(errors)[0];
        let response = Notifications.UserAddFailed;
        response.message = firstError!;

        res.status(422).json(response);
        return;
    }

    const email = req.body.email;
    const query = { email: email };
    UserCollection.findOne(query, (err, user) => {
        if (err) {
            res.status(500).json(Notifications.UserAddFailed);
            return;
        }

        if (user) {
            res.status(409).json(Notifications.UserAddFailedEmailInUse);
            return;
        }

        const newUser = new UserCollection({
            name: req.body.username,
            email: req.body.email,
            password: req.body.passwordOne,
        });

        newUser.save((err) => {
            if (err) {
                res.status(500).json(Notifications.UserAddFailed);
                return;
            }

            res.status(201).json(newUser);
            return;
        });

        return;
    });

    return;
};

router.post("/user/addUser", (req: Request, res: Response) => {
    addUser(req, res);
});

export default router;
