
import { TextField } from '@consta/uikit/TextField';
import { Text, textPropSize } from '@consta/uikit/Text';
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from '@consta/uikit/Button';
// import { withRouter } from "react-router-dom";
import "./style.css";
import hook from './Hooks';
import loginbackground from '../../../assets/img/login-background.png'
function Login(props) {
    const {
        loading,
        login,
        password,
        submit,
        activeLogin,
        activePassword,
        setActivePassword,
        setActiveLogin,
        setPassword,
        setLogin,
        loginHandle
    } = hook();
    return (
        <div className="login">
            <img className='image' src={loginbackground} />
            <div className="input-cont-background">
                <div className="input-cont">
                    <Text size="3xl" className="title">Добро пожаловать!</Text>
                    <TextField
                        status={!activeLogin && submit && login && login.length < 3 && "error"}
                        value={login}
                        onChange={(e) => {
                            setLogin(e.value)
                        }}
                        onFocus={() => {
                            setActiveLogin(true)
                        }}
                        onBlur={() => {
                            setActiveLogin(false)
                        }}
                        className='text-field'
                        placeholder="Логин" />
                    <TextField
                        type='password'
                        status={!activePassword && submit && password && password.length < 3 && "error"}
                        value={password}
                        onFocus={() => setActivePassword(true)}
                        onBlur={() => setActivePassword(false)}
                        onChange={(e) => setPassword(e.value)}
                        className='text-field'
                        placeholder="Пароль" />
                    <Button
                        disabled={loading}
                        className="login-button"
                        label={!loading ? "Войти" : <ClipLoader color="#FFFFFF" loading={loading} size={15} />}
                        onClick={() => loginHandle()} />
                </div>
            </div>
        </div>
    );
}

export default Login;
