import React, { useState } from 'react';

function Signin(){
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = (e) => {
    e.preventDefault();
    setIsLogin(false);
  };

  const switchToLogin = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      alert('Please fill in all fields!');
      return;
    }
    alert(`Welcome back! You've successfully logged in as ${email}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const termsAccepted = e.target.terms.checked;
    
    if (!name || !email || !password) {
      alert('Please fill in all fields!');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long!');
      return;
    }
    if (!termsAccepted) {
      alert('Please accept the Terms of Service and Privacy Policy!');
      return;
    }
    alert(`Account created successfully! Welcome ${name}! A confirmation email has been sent to ${email}`);
  };


  return (
    <div className="sign-body">
      <div className="account">
        <h1 className="account-heading">Join Us</h1>

        <div className="tab-content">
          {isLogin ? (
            <div className="tab-panel active" id="login-panel">
              <form id="login-form" onSubmit={handleLoginSubmit}>
                <div className="Logfield">
                  <label htmlFor="login-email">Email</label>
                  <input type="email" id="login-email" name="email" required />
                </div>
                
                <div className="Logfield">
                  <label htmlFor="login-password">Password</label>
                  <input type="password" id="login-password" name="password" required />
                </div>

                <div className="forgot-password">
                  <a href="#">Forgot Password?</a>
                </div>

                <button type="submit" className="btn btn-primary">Sign In</button>
              </form>

              <div className="divider">
                <span>or</span>
              </div>

              <button className="btn btn-social google-btn">
                Continue with Google
              </button>

              <button className="btn btn-social apple-btn">
                Continue with Apple
              </button>

              <div className="auth-switch">
                Don't have an account? <a href="#" onClick={switchToSignup}>Sign up</a>
              </div>
            </div>
          ) : (
            <div className="tab-panel active" id="signup-panel">
              <form id="signup-form" onSubmit={handleSignupSubmit}>
                <div className="Logfield">
                  <label htmlFor="signup-name">Full Name</label>
                  <input type="text" id="signup-name" name="name" required />
                </div>
                
                <div className="Logfield">
                  <label htmlFor="signup-email">Email</label>
                  <input type="email" id="signup-email" name="email" required />
                </div>
                
                <div className="Logfield">
                  <label htmlFor="signup-password">Password</label>
                  <input type="password" id="signup-password" name="password" required />
                </div>

                <div className="checkbox-group" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0'}}>
                  <input type="checkbox" id="terms" name="terms" required />
                  <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
                </div>

                <button type="submit" className="btn btn-primary">Create Account</button>
              </form>

              <div className="divider">
                <span>or</span>
              </div>

              <button className="btn btn-social google-btn">
                Continue with Google
              </button>

              <button className="btn btn-social apple-btn">
                Continue with Apple
              </button>

              <div className="auth-switch">
                Already have an account? <a href="#" onClick={switchToLogin}>Sign in</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
