import React from 'react';

import NameLogo from './NameLogo';
import Sun from './Sun';
import Planet from './Planet';
import Centre from './Centre';
import Icon from '../Icon';

import './Header.less';
import model from '../../model/model';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'scrollProgress': 0
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;
        const progress = Math.min(1, scrollTop / viewportHeight);
        this.setState({ 'scrollProgress': progress });
    }

    render() {
        const scrollOffset = this.state.scrollProgress * (-1 * window.innerHeight / 2);
        const logoOffset = this.state.scrollProgress * 280;
        const scrollLuminance = Math.max(75, (1 - this.state.scrollProgress) * 100);
        const bgLuminance = 19 + (this.state.scrollProgress * 4);
        const logoLuminance = Math.max(20, (1 - this.state.scrollProgress) * 100);

        const bgColor = `hsl(300, 6%, ${bgLuminance}%)`;
        const sunColor = `hsl(45, 100%, ${scrollLuminance}%)`;
        const planet1Color = `hsl(0, 0%, ${scrollLuminance}%)`;
        const planet2Color = `hsl(40, 90%, ${scrollLuminance}%)`;
        const planet3Color = `hsl(205, 90%, ${scrollLuminance}%)`;
        const planet4Color = `hsl(0, 90%, ${scrollLuminance}%)`;

        return (
            <div className='rc-Header' style={{
                backgroundColor: bgColor
            }}>
                <div className='-planetarium' style={{
                    transform: `translate3d(0, ${scrollOffset}px, 0)`
                }}>
                    <div className='-logo-container' style={{
                        transform: `translate3d(0, ${logoOffset}px, 0)`,
                        color: `hsl(0, 0%, ${logoLuminance}%)`
                    }}>
                        <Centre>
                            <NameLogo
                                firstName={this.props.profile.firstName}
                                lastName={this.props.profile.lastName}
                                title={this.props.profile.title}
                            />
                        </Centre>
                    </div>
                    <Centre><Sun color={sunColor} /></Centre>
                    <Centre><Planet color={planet1Color} orbitDiameter={400} orbitDuration='10s' planetDiameter={14} /></Centre>
                    <Centre><Planet color={planet2Color} orbitDiameter={600} orbitDuration='30s' planetDiameter={18} /></Centre>
                    <Centre><Planet color={planet3Color} orbitDiameter={800} orbitDuration='50s' planetDiameter={20} /></Centre>
                    <Centre><Planet color={planet4Color} orbitDiameter={1000} orbitDuration='80s' planetDiameter={16} /></Centre>

                    <Centre><div className='-scroll-indicator x-1'><Icon name='fas fa-chevron-down' /></div></Centre>
                    <Centre><div className='-scroll-indicator x-2'><Icon name='fas fa-chevron-down' /></div></Centre>
                    <Centre><div className='-scroll-indicator x-3'><Icon name='fas fa-chevron-down' /></div></Centre>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    profile: model.profile.isRequired
};

export default Header;