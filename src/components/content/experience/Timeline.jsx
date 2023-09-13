import React from 'react';
import PropTypes from 'prop-types';

import model from '../../../model/model';

import './Timeline.less';

class Timeline extends React.Component {
    renderTimelineItem(experience, i) {
        return (
            <div className='-timeline-item' key={i}>
                <img className='-image' src={experience.image} />
                <div className='-title'>
                    <div className='-experience-title'>{experience.title}</div>
                    <div className='-experience-description'>{experience.description}</div>
                </div>
                <div className='-content'>
                    {experience.date}
                </div>
            </div>
        );
    }

    render() {
        const timelineItems = this.props.experiences.map(this.renderTimelineItem);
        return (
            <div className='rc-Timeline'>
                {timelineItems}
            </div>
        );
    }
}

Timeline.propTypes = {
    experiences: PropTypes.arrayOf(model.experience)
};

Timeline.defaultProps = {
    experiences: []
};

export default Timeline;