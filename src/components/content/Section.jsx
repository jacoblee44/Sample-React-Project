import React from 'react';
import PropTypes from 'prop-types';


import './Section.less';

class Section extends React.Component {
    render() {
        const anchor = this.props.title.toLowerCase();

        return (
            <div className='rc-Section'>
                <a name={anchor} />
                <div className='-section-title'>
                    {this.props.title}
                </div>
                <div className='-section-content'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;