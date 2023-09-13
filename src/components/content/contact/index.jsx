import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import EmailLink from './EmailLink';

import model from '../../../model/model';

import './index.less';

class Contact extends React.Component {
    render() {
        const username = this.props.data.profile.email.username;
        const domain = this.props.data.profile.email.domain;
        const email = `${username}@${domain}`;

        return (
            <Grid>
                <Row center="xs">
                    <Col xs={12}>
                        <div>You can reach me at</div>
                        <EmailLink email={email} />
                        <div className="freelancersunion-badge">
                            <a href="https://www.freelancersunion.org?utm_source=badge&utm_campaign=member&utm_content=member-stamp-200">
                                <img
                                    src="https://assets.freelancersunion.org/static/images/member-badge.ec82f86413ea.svg"
                                    alt="Proud member of Freelancers Union"
                                />
                            </a>
                        </div>
                    </Col>
                </Row>
                
            </Grid>
        );
    }
}

Contact.propTypes = {
    data: model.data
};

export default Contact;