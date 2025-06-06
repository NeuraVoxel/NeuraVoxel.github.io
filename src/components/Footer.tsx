import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2A2F33;
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: #ccc;
        
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
  
  a {
    color: #ddd;
    
    &:hover {
      color: white;
    }
  }
`;

const Footer: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Research</h3>
          <ul>
            <li><a target="_blank" href="#">Etiam feugiat condimentum</a></li>
            <li><a target="_blank" href="#">Aliquam imperdiet suscipit odio</a></li>
            <li><a target="_blank" href="#">Sed porttitor cras in erat nec</a></li>
            <li><a target="_blank" href="#">Felis varius pellentesque potenti</a></li>
            <li><a target="_blank" href="#">Nullam scelerisque blandit leo</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Product</h3>
          <ul>
            <li><a target="_blank" href="#">Etiam feugiat condimentum</a></li>
            <li><a target="_blank" href="#">Aliquam imperdiet suscipit odio</a></li>
            <li><a target="_blank" href="#">Sed porttitor cras in erat nec</a></li>
            <li><a target="_blank" href="#">Felis varius pellentesque potenti</a></li>
            <li><a target="_blank" href="#">Nullam scelerisque blandit leo</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Legal & Safety</h3>
          <ul>
            <li><a target="_blank" href="#">Etiam feugiat condimentum</a></li>
            <li><a target="_blank" href="#">Aliquam imperdiet suscipit odio</a></li>
            <li><a target="_blank" href="#">Sed porttitor cras in erat nec</a></li>
            <li><a target="_blank" href="#">Felis varius pellentesque potenti</a></li>
            <li><a target="_blank" href="#">Nullam scelerisque blandit leo</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Resources</h3>
          {/* <li><Link to="/resource" className={pathname.startsWith('/resource') ? 'active' : ''}>Resource</Link></li> */}
            {/* <li><Link to="/two-column-2" className={pathname === '/two-column-2' ? 'active' : ''}>Docs</Link></li> */}
          <ul>
            {/* <li><a target="_blank" href="http://bimant.com/">BimAnt</a></li> */}
            {/* <li><a target="_blank" href="/resource">Resource Center</a></li> */}
            {/* <li><a target="_blank" href="/two-column-2">Learning Resource </a></li> */}
             <li><Link target="_blank" to="/resource" >Resource</Link></li>
            <li><Link target="_blank" to="/two-column-2" >Learning</Link></li>
            <li><a target="_blank" href="#">Sed </a></li>
            <li><a target="_blank" href="#">Felis </a></li>
            <li><a target="_blank" href="#">Nullam </a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <p>&copy;版权所有 <strong><span style={{ color: 'white' }}>上海一问三不知软件有限公司</span></strong> 2009-2025 沪ICP备***********  沪公网安备 ****************号. </p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;