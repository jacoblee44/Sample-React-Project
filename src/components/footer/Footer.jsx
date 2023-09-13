import React, { Fragment } from 'react';

import './Footer.less';

class Footer extends React.Component {
    render() {
        const currentYear = (new Date()).getFullYear();
        return (
            <Fragment>
                <div className='rc-Footer'>
                    {`Copyright © ${currentYear} Jacob Lee`}
                </div>
            </Fragment>
        );
    }
}

export default Footer;