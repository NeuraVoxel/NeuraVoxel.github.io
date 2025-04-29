import React from 'react';
import styled from 'styled-components';

// 样式定义
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
`;

const CategorySection = styled.section`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const ToolList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const ToolItem = styled.li`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;

const ToolName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
`;

const ToolDescription = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
`;

const toolchainData = {
  'AIGC/Gen-AI': [
    { name: 'OpenAI API', description: '官方API' },
    { name: 'ChatARKit', description: '基于ChatGPT的AR开发包' },
    { name: 'Point-E', description: '3D点云生成式AI' },
    { name: 'Replicate API', description: '提供数千种云端AI模型，包括扩散模型、图像修复等' },
    { name: 'Unity AI Command', description: '在Unity编辑器中使用自然语言创建场景，基于chatgpt' }
  ],
  '3D模型工具': [
    { name: 'Blender', description: '程序化城市生成' },
    { name: 'Sketchfab', description: '3D模型下载API' },
    { name: 'gltf-avatar-threejs', description: '基于threejs的3d avatar配置器' }
  ],
  '引擎/内核': [
    { name: 'Open Cascade', description: '开源CAD内核' },
    { name: 'CGAL', description: 'C++计算几何库' },
    { name: 'openNURBS', description: 'C++曲面建模库' }
  ],
  '建模软件': [
    { name: 'Dust3D', description: '从零开始实现一个3D建模软件' },
    { name: 'OpenSCAD', description: '程序化CSG建模软件' },
    { name: 'CadQuery', description: '基于Open Cascade开发的Python参数化建模工具' }
  ]
};

const ToolChainPage: React.FC = () => {
  return (
    <Container>
      <Title>行业工具链</Title>
      {Object.entries(toolchainData).map(([category, tools]) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <ToolList>
            {tools.map((tool, index) => (
              <ToolItem key={index}>
                <ToolName>{tool.name}</ToolName>
                <ToolDescription>{tool.description}</ToolDescription>
              </ToolItem>
            ))}
          </ToolList>
        </CategorySection>
      ))}
    </Container>
  );
};

export default ToolChainPage;