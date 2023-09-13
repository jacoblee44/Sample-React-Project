import React from 'react';
import PropTypes from 'prop-types';

import AvatarSvg from '../../../../public/img/avatar.svg';
import './Avatar.less';

class Avatar extends React.Component {

    render() {
        return (
            <div className='rc-Avatar' style={{
                maxWidth: this.props.maxWidth
            }}>
                <div dangerouslySetInnerHTML={{'__html': AvatarSvg}} />
            </div>
        );
    }
}

Avatar.propTypes = {
    maxWidth: PropTypes.string
};

Avatar.defaultProps = {
    maxWidth: '256px'
};

export default Avatar;