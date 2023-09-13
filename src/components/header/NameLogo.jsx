import React from 'react';
import PropTypes from 'prop-types';

import './NameLogo.less';

class NameLogo extends React.Component {
    render() {
        const firstName = this.props.firstName.toUpperCase();
        const lastName = this.props.lastName.toUpperCase();
        const title = this.props.title;

        return (
            <div className='rc-NameLogo'>
                <span className='-title'>{firstName}</span>
                <span className="-title x-light">{lastName}</span>
                <div className="-subtitle">{title}</div>
            </div>
        );
    }
}

NameLogo.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NameLogo;