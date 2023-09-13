import React from 'react';

import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import Section from './content/Section';
import About from './content/about';
import Experience from './content/experience';
import Education from './content/education';
import Project from './content/project';
import Contact from './content/contact';

import model from '../model/model';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header profile={this.props.data.profile} />
                <Content>
                    <About data={this.props.data} />
                    <Section title='Experience'>
                        <Experience data={this.props.data} />
                    </Section>
                    <Section title='Projects'>
                        <Project data={this.props.data} />
                    </Section>
                    <Section title='Education'>
                        <Education data={this.props.data} />
                    </Section>
                    <Section title='Contact'>
                        <Contact data={this.props.data} />
                    </Section>
                </Content>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    data: model.data
};

export default App;