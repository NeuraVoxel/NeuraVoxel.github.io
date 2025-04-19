import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2A2F33;
  box-shadow: 0 2px 5px rgba(255, 153, 51, 0.2);
  border-bottom: 1px solid rgba(122,122,122,0.5); 
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 2.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  
  h1 {
    font-size: 2.5rem;
    margin: 0;
    color: #ffffff; /* 橘色主标题 */
    
    span {
      // color: #ff9e45; /* 橘色次标题 */
      color: #B5ABB2; /* 橘色次标题 */
    }
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #888;
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    
    li {
      margin-left: 1.5rem;
      
      a {
        color: #B5ABB2; /* 深灰色导航文字 */
        font-weight: 600;
        padding: 0.5rem;
        
        &:hover, &.active {
          color: white; 
          border-bottom: 2px solid white;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>
          <img src="/logo-n.png" alt="NeuraVoxel Logo" />
          <h1>Neura<span>Voxel</span></h1>
          {/* <p>A responsive HTML5 site template designed by HTML5 UP</p> */}
        </Logo>
        <Nav>
          <ul>
            <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/examples" className={pathname === '/examples' ? 'active' : ''}>Examples</Link></li>
            <li><Link to="/blog" className={pathname.startsWith('/blog') ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/two-column-2" className={pathname === '/two-column-2' ? 'active' : ''}>Docs</Link></li>
            <li><Link to="/no-sidebar" className={pathname === '/no-sidebar' ? 'active' : ''}>About US</Link></li>
          </ul>
        </Nav>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;