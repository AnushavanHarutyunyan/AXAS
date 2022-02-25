import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { loginActions } from "../../store/actions";
import { loginSelector } from "../../store/selectors";


export default () => {
    const [login, setLogin] = useState("");
    const [activeLogin, setActiveLogin] = useState(false);
    const [password, setPassword] = useState("");
    const [activePassword, setActivePassword] = useState(false);
    const [submit, setSubmit] = useState(false);
    const dispatch = useDispatch();
    const loginHandle = () => {
        setSubmit(true);
        if (login.length > 3 && password.length > 3) {
            dispatch(loginActions.loginAction({ login, password }))
        }
    };
    const loading = useSelector(loginSelector.loadigSelector)

    return {
        login,
        password,
        submit,
        activeLogin,
        activePassword,
        loading,
        setActivePassword,
        setActiveLogin,
        setPassword,
        setLogin,
        loginHandle
    }
}