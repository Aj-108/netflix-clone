import React, { useState } from 'react'
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signin,setSignin] = useState(false);

  return (
    <div className='loginScreen'>
        <div className="loginScreen__background">
            <img
             className='loginScreen__logo' 
             src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
             alt="back img " />
             <button className="loginScreen__button" onClick={() => setSignin(true)}>Sign in</button>

             <div className="loginScreen__gradient"/>
        </div>
            <div className="loginScreen__body">
                { signin?(
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited films,Tv programs and more.</h1>
                        <h2>Watch antwhere. Cancel at ant time.</h2>
                        <h3>
                            Ready to watch? Enter tour email to create or restart your membership. 
                        </h3>
                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button className="loginScreen__getStarted" 
                                        onClick={() => {setSignin(true)}}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}
                
            </div>
    </div>
  )
}

export default LoginScreen