import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import Terminal from './Terminal';
import Profile from './Profile';

import model from '../../../model/model';

class About extends React.Component {
    render() {
        return (
            <Grid>
                <Row middle={'xs'}>
                    <Col xs={12} sm={12} md={5} lg={4} xl={4}>
                        <Profile socialProfiles={this.props.data.socialProfiles} />
                    </Col>
                    <Col xs={12} sm={12} md={7} lg={8} xl={8}>
                        <Terminal title='Hello world!' wordSets={this.props.data.skills} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

About.propTypes = {
    data: model.data
};

export default About;