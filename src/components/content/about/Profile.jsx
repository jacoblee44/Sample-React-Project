import React from 'react';
import PropTypes from 'prop-types';

import model from '../../../model/model';

import Avatar from './Avatar';
import Icon from '../../Icon';


import './Profile.less';

class Profile extends React.Component {
    render() {
        const socialProfileIcons = this.props.socialProfiles.map((socialProfile, i) =>
            <Icon key={i}
                name={socialProfile.icon}
                url={socialProfile.url}
            />
        );

        return (
            <div className='rc-Profile'>
                <Avatar />
                <div className='-social-icons'>
                    {socialProfileIcons}
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    socialProfiles: PropTypes.arrayOf(model.socialProfile)
};

Profile.defaultProps = {
    socialProfiles: []
};

export default Profile;