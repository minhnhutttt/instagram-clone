import React, { useState, useContext} from 'react'
import  { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firebase';

function login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setemailAddress] = useState('');
    const [password, usePassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = passwrod === '' || emailAddress === '';

    const handleLogin = () => {

    };

    return (
        <div>
            Login page
        </div>
    )
}

export default login;