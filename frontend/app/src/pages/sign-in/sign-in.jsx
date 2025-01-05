import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import SignInForm from '../../components/sign-in-form/sign-in-form';
import './sign-in.css';

function SignInPage() {
  return (
    <div className="signin-page">
        <Navbar/>
        <Sidebar/>
        <main className="signin-main">
        <SignInForm/>
        </main>
    </div>
  );
}

export default SignInPage;
