import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  // display: flex;
  // flex-direction: column;
  // height: 300px; /* 设置固定高度 */
  
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-color);
    margin-bottom: 1rem;
    flex-grow: 1; /* 让描述文本占据剩余空间 */
    overflow: auto; /* 如果内容过多，允许滚动 */
    min-height: 130px; /* 允许内容高度为 0 */
  }
`;

const CardButton = styled.a`
  display: inline-block;
  background-color: #cdcdcd; /* 橘色背景 */
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #F6A073; /* 浅橘色悬停效果 */
    color: black;
  }
`;

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  buttonText = 'Learn More',
  buttonLink = '#',
}) => {
  return (
    <Card>
      <CardImage>
        <img src={imageUrl} alt={title} />
      </CardImage>
      <CardContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <CardButton href={buttonLink}>{buttonText}</CardButton>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;