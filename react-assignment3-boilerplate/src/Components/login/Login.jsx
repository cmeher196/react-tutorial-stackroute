import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const login = (e) => {
        e.preventDefault();
        console.log(username, password)
        axios.post(`http://localhost:3001/auth/v1`, {
            username,
            password
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('isAuthenticated', true);
                res.data.token ? history.push('dashboard') : alert('Not authorized')
                window.location.reload(false);
            })
            .catch(err =>
                alert(err))

    }
    return (
        <div className="container" style={{ padding: '50px' }}>
            <div className="row">
                <div className="col-md-4 py-5 bg-primary text-white text-center ">
                    <div className=" ">
                        <div className="card-body">
                            <h2 className="py-3">Login</h2>
                            <h6>Welcome News 24 x 7. Please login to view the currents news</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please fill with your details</h4>
                    <form onSubmit={e=>login(e)}>
                        <div className="row">
                            <div className="form-group col">
                                <input placeholder="Enter Username" id='login' className="form-control" type="text" onChange={e=>setUsername(e.target.value)}/>
                            </div>
                            <div className="form-group col-md-6">
                                <input type="password" className="form-control" id='password' placeholder="Enter Password" onChange={e=>setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-row">
                            <button type="submit" className="btn btn-danger submit">Submit</button>
                        </div>
                        <div className="form-row">
                           <p>New to this site ? <Link to='/register'>register here</Link></p> 
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;