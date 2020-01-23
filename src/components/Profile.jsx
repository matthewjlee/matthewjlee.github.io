import React from 'react';

import 'components/Profile.css';

const Profile = () => (
    <div className='profile'>
        <img
            src='https://pbs.twimg.com/profile_images/1217871087226081282/fQgxLTGk_400x400.jpg'
            alt='my face'
            className='image'
        />
        <div className='intro'>
            Hi! I'm Matthew and welcome to my page.
        </div>
    </div>
);

export default Profile;