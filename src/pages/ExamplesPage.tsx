import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExamplesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #585858;
  text-align: center;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.3);
    margin: 1rem auto;
  }
`;

const PageDescription = styled.p`
  text-align: center;
  color: #B5ABB2;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExampleCard = styled.div`
  background-color: #2A2F33;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ExampleImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const ExampleContent = styled.div`
  padding: 1.5rem;
`;

const ExampleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const ExampleDescription = styled.p`
  color: #B5ABB2;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ExampleButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 3px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: #ffffff;
    color: #2A2F33;
  }
`;

const examples = [
  {
    id: 1,
    title: "响应式布局",
    description: "展示完全响应式的网页设计，适应各种屏幕尺寸和设备。",
    image: "/images/examples/responsive.jpg",
    link: "/examples/responsive"
  },
  {
    id: 2,
    title: "交互式组件",
    description: "各种交互式UI组件的展示，包括轮播图、模态框和下拉菜单等。",
    image: "/images/examples/interactive.jpg",
    link: "/examples/interactive"
  },
  {
    id: 3,
    title: "动画效果",
    description: "使用CSS和JavaScript实现的各种平滑动画和过渡效果。",
    image: "/images/examples/animations.jpg",
    link: "/examples/animations"
  },
  {
    id: 4,
    title: "表单设计",
    description: "美观且功能齐全的表单设计，包括验证和用户反馈。",
    image: "/images/examples/forms.jpg",
    link: "/examples/forms"
  },
  {
    id: 5,
    title: "图片画廊",
    description: "展示各种图片布局和画廊效果，支持灯箱查看。",
    image: "/images/examples/gallery.jpg",
    link: "/examples/gallery"
  },
  {
    id: 6,
    title: "排版样式",
    description: "展示各种文本排版样式和效果，包括标题、段落和列表等。",
    image: "/images/examples/typography.jpg",
    link: "/examples/typography"
  }
];

const ExamplesPage: React.FC = () => {
  return (
    <ExamplesContainer>
      <PageTitle>示例展示</PageTitle>
      <PageDescription>
        探索我们精心设计的各种网页组件和布局示例。这些示例展示了现代网页设计的最佳实践和创新技术，
        帮助您了解如何创建美观、响应式且用户友好的网站。
      </PageDescription>
      
      <ExamplesGrid>
        {examples.map(example => (
          <ExampleCard key={example.id}>
            <ExampleImage style={{ backgroundImage: `url(${example.image})` }} />
            <ExampleContent>
              <ExampleTitle>{example.title}</ExampleTitle>
              <ExampleDescription>{example.description}</ExampleDescription>
              <ExampleButton to={example.link}>查看详情</ExampleButton>
            </ExampleContent>
          </ExampleCard>
        ))}
      </ExamplesGrid>
    </ExamplesContainer>
  );
};

export default ExamplesPage;