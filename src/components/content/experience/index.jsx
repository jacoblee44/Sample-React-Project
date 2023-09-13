import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import model from '../../../model/model';
import Timeline from './Timeline';


class Experience extends React.Component {
    render() {
        return (
            <Grid>
                <Row center="xs">
                    <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Timeline experiences={this.props.data.experience} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

Experience.propTypes = {
    data: model.data
};

export default Experience;