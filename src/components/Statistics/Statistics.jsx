import React from 'react';
import PropTypes from 'prop-types';
import { StatsContainer } from './Statistics.styled';

const Statistics = ({
  positive,
  neutral,
  negative,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total ? (
        <StatsContainer>
          <li>good : {positive}</li>
          <li>neutral : {neutral}</li>
          <li>bad : {negative}</li>
          <li>total : {total}</li>
          <li>Positive percentage : {positivePercentage.toFixed(2)}%</li>
        </StatsContainer>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
