import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import model from '../../../model/model';
import EducationList from './EducationList';


class Education extends React.Component {
    render() {
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={12}>
                        <EducationList experiences={this.props.data.education} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Education.propTypes = {
    data: model.data
};

export default Education;