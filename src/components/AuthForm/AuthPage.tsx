import React from "react"
import classes from "./AuthForm.module.scss"

export function AuthPage() {
    return (
        <div className={classes.AuthPage}>
            <div className={classes.AuthForm}>
                <div className={classes.title}>Авторизация</div>

                <input type="text" />
                <input type="password" />

                <button>Войти</button>
            </div>
        </div>
    )
}