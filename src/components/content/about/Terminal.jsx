import React from 'react';
import PropTypes from 'prop-types';

import model from '../../../model/model';

import './Terminal.less';

class Terminal extends React.Component {
    targetLength(words) {
        let result = 0;

        for (let i = 0; i < words.length; i++) {
            result = Math.max(result, words[i].length);
        }

        return result;
    }

    rightPadWord(word, targetLength) {
        const tabLength = 4;
        const padLength = targetLength - word.length + tabLength;
        return word + ' '.repeat(padLength);
    }

    renderWordSet(key, words) {
        const allWords = this.props.wordSets.reduce((acc, current) => acc.concat(current.values), []);
        const targetLength = this.targetLength(allWords);

        const paddedWords = words.map((word) =>
            <div className='-word' key={word}>{this.rightPadWord(word, targetLength)}</div>
        );

        return (
            <div key={key}>
                <div className='-line'>
                    <span className='-command'>ls</span>
                    <span className='-directory'>{'skills/' + key}</span>
                </div>

                <div className='-words'>
                    {paddedWords}
                </div>

                <br />
            </div>
        );
    }

    render() {
        const wordSets = this.props.wordSets.map((wordSet) => this.renderWordSet(wordSet.key, wordSet.values));

        return (
            <div className='rc-Terminal' style={{
                width: this.props.width,
                height: this.props.height
            }}>
                <div className='-title-bar'>
                    <div className='-title-text'>{this.props.title}</div>
                    <div className='-title-buttons'>
                        <div className='-title-button x-close' />
                        <div className='-title-button x-minimize' />
                        <div className='-title-button x-maximize' />
                    </div>
                </div>
                <div className='-window'>
                    {wordSets}

                    <div className='-line'>
                        <span className='-cursor'>_</span>
                    </div>
                </div>
            </div>
        );
    }
}

Terminal.propTypes = {
    title: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    wordSets: PropTypes.arrayOf(model.skill)
};

Terminal.defaultProps = {
    title: '',
    width: '100%',
    height: 'auto',
    wordSets: []
};

export default Terminal;