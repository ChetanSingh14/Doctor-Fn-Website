import React, { useState } from 'react';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="w-full max-w-xs mx-auto bg-red-200">
      <h1 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        {isSignUp && (
          <div className="mb-4">
            <input type="text" placeholder="Username" className="input" />
          </div>
        )}
        <div className="mb-4">
          <input type="email" placeholder="Email" required className="input" />
        </div>
        <div className="mb-4">
          <input type="password" placeholder="Password" required className="input" />
        </div>
        {isSignUp && (
          <div className="mb-4">
            <input type="password" placeholder="Confirm Password" required className="input" />
          </div>
        )}
        <button type="submit" className="btn">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
      </form>
      {isSignUp ? (
        <p>Already have an account? <span onClick={toggleSignUp} className="text-blue-500 cursor-pointer">Sign In</span></p>
      ) : (
        <p>Don't have an account? <span onClick={toggleSignUp} className="text-blue-500 cursor-pointer">Sign Up</span></p>
      )}
      <div className="mt-4">
        <button className="btn">Login with Facebook</button>
        <button className="btn">Login with Google</button>
      </div>
      {!isSignUp && (
        <p>
          <a href="/" className="text-blue-500">Forgot Password?</a>
        </p>
      )}
    </div>
  );
};

export default SignIn;