import React from 'react';
import PropTypes from 'prop-types';

import model from '../../../model/model';

import './ProjectList.less';

class ProjectList extends React.Component {
    constructor() {
        super();
        this.renderProjectListItem = this.renderProjectListItem.bind(this);
    }

    renderProjectListItemDetail(detail, i) {
        return (
            <li className='-detail' key={i}>
                {`${detail.title}: ${detail.description}`}
            </li>
        );
    }

    renderProjectListItem(project, i) {
        const projectListItemDetails = project.details
            ? project.details.map(this.renderProjectListItemDetail)
            : null;

        const details = projectListItemDetails != null ? (
            <div className='-details'>
                <div className='-details-title'>Technology</div>
                {projectListItemDetails}
            </div>
        ) : null;

        const image = project.image
            ? <img className='-image' src={project.image} />
            : null;

        return (
            <div className='-projectListItem' key={i}>
                {image}
                <div className='-title'>{project.title}</div>
                <div className='-description'>{project.description}</div>
                <div className='-date'>{project.date}</div>
                {details}
            </div>
        );
    }

    render() {
        const projectListItems = this.props.projects.map(this.renderProjectListItem);

        return (
            <div className='rc-ProjectList'>
                {projectListItems}
            </div>
        );
    }
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(model.project)
};

export default ProjectList;