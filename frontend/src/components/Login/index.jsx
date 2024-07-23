import './style.scss'
import Icon from '../../assets/images/aileet-icon.png';  
function Login() {
  return ( 
    <>
    <div className="login-wrapper">
      <div className="login-content">
        <div className="logo">
          <img src={Icon} alt="" /><h1>Aileet</h1>
          </div>
          <div className="sign-in">
            <form action="">
            <label htmlFor='username'>Username</label>
            <input type="text" name='username' placeholder='Username' />
            <label htmlFor="passwd">Password</label>
            <input type="password" name='passwd' placeholder='Password' />
            <button type="submit">Sign In</button>
            </form>
        </div>
      </div>
      </div></>
   );
}

export default Login;