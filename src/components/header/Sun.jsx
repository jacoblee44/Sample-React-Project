import React from 'react';
import PropTypes from 'prop-types';

import './Sun.less';

class Sun extends React.Component {
    render() {
        return (
            <div className='rc-Sun' style={{
                height: this.props.diameter,
                width: this.props.diameter
            }}>
                <div className='-circle' style={{ backgroundColor: this.props.color }} />
                <div className='-circle x-radiate x-delay-1' style={{ backgroundColor: this.props.color }} />
                <div className='-circle x-radiate x-delay-2' style={{ backgroundColor: this.props.color }} />
                <div className='-circle x-radiate x-delay-3' style={{ backgroundColor: this.props.color }} />
            </div>
        );
    }
}

Sun.propTypes = {
    color: PropTypes.string,
    diameter: PropTypes.string
};

Sun.defaultProps = {
    color: 'white',
    diameter: '200px'
};

export default Sun;