import './style.scss';
import Icon from '../../assets/images/aileet-icon.png';  
import { useState,useContext } from 'react';
import { context } from '../../store';
import {redirect} from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('jamshid14092002@gmail.com');
  const [passwd, setPasswd] = useState('!Jamshid14092002');
  const [error, setError] = useState(null); 
  const {store} = useContext(context)
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const response = await fetch(`${store.url}admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: passwd,
        }),
      });

      if (response.status === 401) {
        setError('Login failed. Please check your credentials.');
        return;
      }

      if (response.status === 200) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem('token', token);
        return window.location.href = '/dashboard_01';
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-content">
          <div className="logo">
            <img src={Icon} alt="Aileet Logo" />
            <h1>Aileet</h1>
          </div>
          <div className="sign-in">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="passwd">Password</label>
              <input
                type="password"
                name="passwd"
                placeholder="Password"
                value={passwd}
                onChange={(e) => setPasswd(e.target.value)}
              />
              <button type="submit">Sign In</button>
              {error && <p className="error-message">{error}</p>} 
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
