import * as React from 'react'
import { Link } from 'gatsby'
import validator from 'validator'

const ContentAwareLink = ({ to, children, ...rest }) =>
  validator.isURL(to) ? (
    <a href={to} {...rest}>
      {children}
    </a>
  ) : (
    <Link to={to} {...rest}>
      {children}
    </Link>
  )

export default ContentAwareLink
