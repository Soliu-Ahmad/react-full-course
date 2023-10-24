import React from 'react'

const Header = () => {
    const headerStyle = {
        backgroundColor: "red",
        color: "#fff",
        borderRadius: "5px",
        padding: "10px"
    }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO REACT IN DETAILS</h1>
      <h2 style={{color: 'black', borderTopRightRadius: "2px", backgroundColor: "greenyellow"}}>WELCOME TO DLT-AFRICA BOOT CAMP</h2>
    </header>
  )
}

export default Header
 
