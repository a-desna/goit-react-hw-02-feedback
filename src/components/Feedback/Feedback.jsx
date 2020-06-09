import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickFeedback = e => {
    const valueBtn = e.target.value;
    if (valueBtn === 'good') {
      this.setState(({ good }) => ({
        good: good + 1,
      }));
    } else if (valueBtn === 'neutral') {
      this.setState(({ neutral }) => ({
        neutral: neutral + 1,
      }));
    } else if (valueBtn === 'bad') {
      this.setState(({ bad }) => ({
        bad: bad + 1,
      }));
    }
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={this.handleClickFeedback}
          options={this.state}
        />
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default Feedback;
