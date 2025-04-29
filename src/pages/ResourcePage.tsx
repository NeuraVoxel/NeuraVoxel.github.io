import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const ResourceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ResourceCard = styled.a`
  background-color: #2A2F33;
  border-radius: 5px;
  padding: 1.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ResourceDescription = styled.p`
  color: #B5ABB2;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ResourcePage: React.FC = () => {
  const resources = [
    {
      title: "开发文档",
      description: "详细的API文档和开发指南，帮助您快速上手NeuraVoxel。",
      link: "https://docs.neuravoxel.com"
    },
    {
      title: "示例代码",
      description: "丰富的示例代码和最佳实践，展示NeuraVoxel的各种用法。",
      link: "https://github.com/neuravoxel/examples"
    },
    {
      title: "教程视频",
      description: "通过视频教程学习NeuraVoxel的使用方法和高级特性。",
      link: "https://youtube.com/neuravoxel"
    },
    {
      title: "社区论坛",
      description: "加入NeuraVoxel社区，与其他开发者交流经验和想法。",
      link: "https://forum.neuravoxel.com"
    },
    {
      title: "技术博客",
      description: "了解NeuraVoxel的最新动态和技术文章。",
      link: "/blog"
    },
    {
      title: "GitHub仓库",
      description: "访问我们的开源代码仓库，参与项目开发。",
      link: "https://github.com/neuravoxel"
    }
  ];

  return (
    <>
      <Banner 
        title="资源中心" 
        subtitle="探索丰富的学习资源，助您掌握NeuraVoxel" 
      />
      <ResourceContainer>
        <ResourceGrid>
          {resources.map((resource, index) => (
            <ResourceCard key={index} href={resource.link} target="_blank" rel="noopener noreferrer">
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
            </ResourceCard>
          ))}
        </ResourceGrid>
      </ResourceContainer>
    </>
  );
};

export default ResourcePage;