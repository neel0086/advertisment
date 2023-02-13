import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase.config';
// import OAuth from "./OAuth";

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const { name, email, password } = formData

    // const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log(name, ' ', value)
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const onSubmit = async (e) => {
        console.log('here')
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            updateProfile(auth.currentUser, { displayName: name });

            const copyOfFormData = { ...formData };
            copyOfFormData.timestamp = serverTimestamp();

            delete copyOfFormData.password
            console.log(copyOfFormData)

            await setDoc(doc(db, "users", user.uid), copyOfFormData);

            // navigate('/');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        onChange={onChange}
                        type="email"
                        id='email'
                        name='email'
                        placeholder="Enter email"
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor="name">name</label>
                    <input
                        type="name"
                        onChange={onChange}
                        id="name"
                        value={name}
                        name='name'
                        placeholder="Enter name"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={onChange}
                        name='password'
                        placeholder="Password"
                    />
                </div>
                {/* <OAuth /> */}
                <button type="submit">
                    Submit
                </button>
            </form>
        </>
    )
}

export default SignUp