import React from 'react';
import PropTypes from 'prop-types';

import './Planet.less';

class Planet extends React.Component {
    render() {
        return (
            <div className='rc-Planet' style={{
                height: this.props.orbitDiameter,
                width: this.props.orbitDiameter
            }}>
                <div className='-orbit-ring' />
                <div className='-planet-orbit' style={{
                    animationDuration: this.props.orbitDuration,
                }}>
                    <div className='-planet' style={{
                        backgroundColor: this.props.color,
                        height: this.props.planetDiameter,
                        width: this.props.planetDiameter
                    }} />
                    <div className='-planet-shadow' style={{
                        height: Math.max(window.innerHeight, window.innerWidth),
                        width: this.props.planetDiameter * 5
                    }} />
                </div>
            </div>
        );
    }
}

Planet.propTypes = {
    color: PropTypes.string,
    orbitDiameter: PropTypes.number.isRequired,
    orbitDuration: PropTypes.string.isRequired,
    planetDiameter: PropTypes.number.isRequired,
};

Planet.defaultProps = {
    color: 'white'
};

export default Planet;