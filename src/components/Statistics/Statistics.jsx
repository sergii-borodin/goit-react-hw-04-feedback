import React from 'react'
import PropTypes from 'prop-types'
import { StatsContainer } from './Statistics.styled';

const Statistics = ({ stats, total, positivePercentage }) => {
    const { good, neutral, bad } = stats;
  return (
      <>
          {total ? <StatsContainer>
              <li>good : {good}</li>
              <li>neutral : {neutral}</li>
              <li>bad : {bad}</li>
              <li>total : {total}</li>
              <li>Positive percentage : {positivePercentage.toFixed(2)}%</li>
          </StatsContainer> : <p>No feedback given</p>}
    </>
  )
}

Statistics.propTypes = {
  stats: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired

}

export default Statistics