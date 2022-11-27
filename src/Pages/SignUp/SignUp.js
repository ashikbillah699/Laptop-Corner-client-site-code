import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createSignIn, googleSignIn, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState();
    const provider = new GoogleAuthProvider()
    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        setSignupError('')

        createSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('user create successfully')
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email)
                    })
                    .catch(error => console.error(error))


            })
            .catch(error => {
                console.error(error.message)
                setSignupError(error.message)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        console.log(user)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/')
                toast.success('users saved')
            })
    }

    const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="hero min-h-screen w-2/3 mx-auto my-48">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p to='/' href="#" className="label-text-alt link link-hover text-red-600">{signupError && <>{signupError}</>}</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <label className="label mx-auto">
                            <small >Now you can <Link className="label-text-alt link link-hover text-primary" to='/Login'>Login</Link></small>
                        </label>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="divider">OR</div>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-outline">CONTINUE TO GOOGLE</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;