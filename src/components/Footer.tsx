import React from 'react';
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
  grid-template-columns: repeat(3, 1fr);
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
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Random Stuff</h3>
          <ul>
            <li><a href="#">Etiam feugiat condimentum</a></li>
            <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
            <li><a href="#">Sed porttitor cras in erat nec</a></li>
            <li><a href="#">Felis varius pellentesque potenti</a></li>
            <li><a href="#">Nullam scelerisque blandit leo</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Random Stuff</h3>
          <ul>
            <li><a href="#">Etiam feugiat condimentum</a></li>
            <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
            <li><a href="#">Sed porttitor cras in erat nec</a></li>
            <li><a href="#">Felis varius pellentesque potenti</a></li>
            <li><a href="#">Nullam scelerisque blandit leo</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h3>Random Stuff</h3>
          <ul>
            <li><a href="#">Etiam feugiat condimentum</a></li>
            <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
            <li><a href="#">Sed porttitor cras in erat nec</a></li>
            <li><a href="#">Felis varius pellentesque potenti</a></li>
            <li><a href="#">Nullam scelerisque blandit leo</a></li>
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