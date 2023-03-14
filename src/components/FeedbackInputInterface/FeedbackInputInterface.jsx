import React from 'react'
import PropTypes from 'prop-types'

import { ControlsContainer, Button } from './FeedbackInputInterface.styled';

const FeedbackInputInterface = ({ onLeaveFeedback, options }) => {
    const optionNames = Object.keys(options);
    return (<>
        <ControlsContainer>
            {optionNames.map(optionName =>
                <li key={optionName}><Button name={optionName} onClick={(event) => onLeaveFeedback(event)}>{ optionName.charAt(0).toUpperCase()
  + optionName.slice(1)}</Button></li>
                )}
        </ControlsContainer></>
  )
}

FeedbackInputInterface.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired, options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
}

export default FeedbackInputInterface