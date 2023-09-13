import React from 'react';
import PropTypes from 'prop-types';

import './Centre.less';

class Centre extends React.Component {
    render() {
        return (
            <div className='rc-Centre' style={{
                transform: `translate3d(${this.props.offsetX}, ${this.props.offsetY}, 0)`
            }}>
                {this.props.children}
            </div>
        );
    }
}

Centre.propTypes = {
    offsetX: PropTypes.string,
    offsetY: PropTypes.string
};

Centre.defaultProps = {
    offsetX: '-50%',
    offsetY: '-50%'
};

export default Centre;