import React from 'react';

import './Content.less';

class Content extends React.Component {

    render() {

        return (
            <div className='rc-Content'>
                {this.props.children}
            </div>
        );
    }
}

export default Content;