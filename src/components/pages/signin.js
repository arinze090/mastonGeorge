import React from 'react';
import SignIn from '../../Signin';
import scrollToTop from '../scrollToTop';

function signinPage() {
    return (
        <>
            <scrollToTop />
            <SignIn />
        </>
    )
}

export default signinPage;