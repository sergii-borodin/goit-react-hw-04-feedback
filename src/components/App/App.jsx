import React, { useState } from 'react';
import FeedbackInputInterface from '../FeedbackInputInterface/FeedbackInputInterface';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';

import { GlobalStyle } from '../GlobalStyle';
import { MainContainer } from './App.styled';

const App = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);

  const options = {
    good: 'good',
    neutral: 'neutral',
    bad: 'bad,',
  };

  const onLeaveFeedback = event => {
    const stateKey = event.target.name;
    switch (stateKey) {
      case 'good':
        setPositive(positive + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setNegative(negative + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return positive + neutral + negative;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return positive ? (positive * 100) / total : 0;
  };

  return (
    <MainContainer>
      <Section title="Please leave your feedback">
        <FeedbackInputInterface
          onLeaveFeedback={onLeaveFeedback}
          options={options}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          positive={positive}
          neutral={neutral}
          negative={negative}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
        <GlobalStyle />
      </Section>
    </MainContainer>
  );
};

export default App;
