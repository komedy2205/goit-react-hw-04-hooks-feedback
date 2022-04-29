import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import { Container } from './components/FeedbackOptions/FeedbackOptions.styled';
import { Section } from './components/FeedbackOptions/FeedbackOptions.styled';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  increment = type => {
    this.setState(prevState => {
      return { [type]: prevState[type] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  };

  render() {

    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const feedbackPercentage = this.countPositiveFeedbackPercentage();
      

    return (
      <Container>
        <Section title="State section">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.increment}
          />
        </Section>
        <p>Statistics</p>

        <Section title="State section">
          {this.countTotalFeedback() ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedbackPercentage={feedbackPercentage} />
          ) : "There is no feedback"}
        </Section>
      </Container>
    )
  }
}
export default App;
