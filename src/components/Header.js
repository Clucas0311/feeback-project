import React from 'react'
import PropTypes from 'prop-types'

const Header = ({text, bgColor, textColor}) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}
// We set default props for a particular component if no prop is passed in
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0, 0.4)",
    textColor: "#ff6a95"
}

// We can specify what type of prop ie (bool, string or array)
Header.propTypes = {
    text: PropTypes.string,
}

export default Header