import React from "react";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { logoutUser } from "../../app/user-slice";
import { removeItemsOnLogout } from "../../app/item-slice";

import styles from "./Logout.module.scss";

interface Props extends RouteComponentProps {}

const Logout = (props: Props) => {
    const dispatch = useDispatch();

    const redirectToLogin = () => {
        const { history } = props;
        if (history) {
            history.push("/login");
        }
    };

    const handleOnClick = () => {
        dispatch(logoutUser());
        dispatch(removeItemsOnLogout());

        redirectToLogin();
    };

    return (
        <div className={styles.grid}>
            <h1 className="text-center mt-3 mb-sm-5">
                This is the logout page
            </h1>
            <div className="col-md-12 text-center">
                <button className="btn btn-primary" onClick={handleOnClick}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default withRouter(Logout);
