import React from 'react';
import PropTypes from 'prop-types';

import './EmailLink.less';

class EmailLink extends React.Component {
    render() {
        return (
            <a className='rc-EmailLink' href={`mailto:${this.props.email}`}>
                {this.props.email}
            </a>
        );
    }
}

EmailLink.propTypes = {
    email: PropTypes.string
};

export default EmailLink;