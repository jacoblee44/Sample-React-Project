import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import model from '../../../model/model';
import ProjectList from './ProjectList';


class Project extends React.Component {
    render() {
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={12}>
                        <ProjectList projects={this.props.data.projects} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Project.propTypes = {
    data: model.data
};

export default Project;