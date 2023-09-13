import React from 'react';
import PropTypes from 'prop-types';

import './Icon.less';

class Icon extends React.Component {
    render() {
        const icon = (
            <i className={this.props.name} style={{
                color: 'inherit',
                fontSize: this.props.size
            }} />
        );

        const maybeActionableIcon = this.props.url
            ? <a className='-actionable' href={this.props.url} target='_blank' rel='nofollow'>{icon}</a>
            : icon;

        return (
            <div className='rc-Icon' style={{
                color: this.props.color
            }}>
                {maybeActionableIcon}
            </div>
        );
    }
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    url: PropTypes.string
};

Icon.defaultProps = {
    color: 'inherit',
    size: 50
};

export default Icon;