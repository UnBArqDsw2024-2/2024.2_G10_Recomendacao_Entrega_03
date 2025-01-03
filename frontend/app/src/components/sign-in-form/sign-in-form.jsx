import React from 'react';
import './sign-in-form.css';

function SignInForm() {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default SignInForm;
