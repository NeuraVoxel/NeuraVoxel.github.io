import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.section`
  background-color: #2A2F33; 
  color: white;
  padding: 3rem 0;
  text-align: center;
`;

const BannerContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  opacity: 0.8;
  
  h2 {
    color: white;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const BannerButton = styled.a`
  display: inline-block;
  background-color: white;
  color: black; /* 按钮文字颜色与背景色匹配 */
  padding: 0.8rem 1rem;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 0 10px; /* 左右各 10px 的间距 */
  
  &:hover {
    background-color: #F6A073; /* 浅橘色悬停效果 */
    color: white;
    transform: translateY(-3px);
  }
`;

interface BannerProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  buttonText2?: string;
  buttonLink2?: string;
}

const Banner: React.FC<BannerProps> = ({ title, subtitle, buttonText, buttonLink, buttonText2, buttonLink2 }) => {
  return (
    <BannerContainer>
      <BannerContent>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        {buttonText && buttonLink && (
          <BannerButton href={buttonLink}>{buttonText}</BannerButton>
        )}
        <>      </>
        {buttonText2 && buttonLink2 && (
          <BannerButton href={buttonLink2}>{buttonText2}</BannerButton>
        )}
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;