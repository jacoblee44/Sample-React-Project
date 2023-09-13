import React from 'react';
import PropTypes from 'prop-types';

import model from '../../../model/model';

import './EducationList.less';

class EducationList extends React.Component {
    constructor() {
        super();
        this.renderEducationListItem = this.renderEducationListItem.bind(this);
    }

    renderEducationListItemDetail(detail, i) {
        return (
            <li className='-detail' key={i}>
                {`${detail.title}: ${detail.description}`}
            </li>
        );
    }

    renderEducationListItem(experience, i) {
        const educationListItemDetails = experience.details
            ? experience.details.map(this.renderEducationListItemDetail)
            : null;

        const details = educationListItemDetails != null ? (
            <div className='-details'>
                <div className='-details-title'>Technology</div>
                {educationListItemDetails}
            </div>
        ) : null;

        const image = experience.image
            ? <img className='-image' src={experience.image} />
            : null;

        return (
            <div className='-educationListItem' key={i}>
                {image}
                <div className='-title'>{experience.title}</div>
                <div className='-description'>{experience.description}</div>
                <div className='-date'>{experience.date}</div>
                {details}
            </div>
        );
    }

    render() {
        const educationListItems = this.props.experiences.map(this.renderEducationListItem);

        return (
            <div className='rc-EducationList'>
                {educationListItems}
            </div>
        );
    }
}

EducationList.propTypes = {
    experiences: PropTypes.arrayOf(model.experience)
};

export default EducationList;