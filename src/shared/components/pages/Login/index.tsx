import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import AppContext from '@shared/AppContext';

const Login = () => {
    const ctx = useContext(AppContext) as AppContext;

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const [shouldRedirect, setShouldRedirect] = useState(false);

    const onSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await axios.post('/login', { ...user });
            console.log(res);
            ctx.setUser(res.data);
            setShouldRedirect(true);
        } catch (err) {
            console.log(err);
        }
    };

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    if (shouldRedirect) {
        return <Redirect to="/" />;
    } else {
        return <React.Fragment>
            <h1>Login</h1>

            <form onSubmit={onSubmit}>
                <input name="username" type="text" value={user.username} onChange={onChange} />
                <input name="password" type="password" value={user.password} onChange={onChange} />
                <button type="submit">Login</button>
            </form>
        </React.Fragment>
    }
};

export default Login;
