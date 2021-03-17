import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavLink = styled(Link)`
  margin: 1vh;
  color: white;
  text-decoration: none;
  &:hover{
    border-bottom: 1px solid white; 
  }
`;

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <NavLink data-path='/home' to="/home">Home</NavLink>
          <NavLink data-path='/info' to="/info">Info</NavLink>
        </nav>
      </header>
  )
}

export default Header
