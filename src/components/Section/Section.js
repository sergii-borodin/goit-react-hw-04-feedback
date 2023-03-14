import React from 'react'
import PropTypes from 'prop-types'

import { SectionBlock } from './Section.styled'

const Section = ({title, children}) => {
  return (
      <SectionBlock>
          <h1>{ title }</h1>
          {children}
      </SectionBlock>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Section