import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';

const PageContainer = styled.div`
  background-color: var(--light-gray);
`;

const ContentSection = styled.section`
  padding: 1rem 0;
`;

const ContentGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr ;
  gap: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 1.5rem;
    color: var(--secondary-color);
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ThreeColumnPage: React.FC = () => {
  return (
    <PageContainer>
      <Banner
        title="关于我们"
        subtitle="NeuraVoxel - 用AI和计算机图形技术重新定义数据可视化"
      />

      <ContentSection>
        <ContentGrid>
          <Column>
            <h2>公司简介</h2>
            <p>
              NeuraVoxel是一家专注于AI数据可视化的创新科技公司。我们致力于将复杂的AI数据转化为直观、易懂的可视化表现形式，帮助研究人员和企业更好地理解和分析数据。
            </p>
            <p>
              我们的团队由来自计算机图形学、人工智能和数据科学领域的专家组成，拥有丰富的行业经验和技术积累。通过持续创新和技术突破，我们为客户提供最先进的数据可视化解决方案。
            </p>
          </Column>
        </ContentGrid>
      </ContentSection>

      <ContentSection>
        <ContentGrid>
          <Column>
            <h2>我们的使命</h2>
            <p>
              我们的使命是通过创新的技术手段，让数据可视化变得简单、直观和有效。我们相信，好的可视化不仅能够展示数据，更能够讲述数据背后的故事，帮助用户做出更明智的决策。
            </p>
            <ul>
              <li>为AI研究提供强大的可视化工具</li>
              <li>推动数据可视化技术的创新和发展</li>
              <li>帮助企业更好地理解和利用数据</li>
              <li>促进人工智能技术的普及和应用</li>
            </ul>
          </Column>
        </ContentGrid>
      </ContentSection>

      <ContentSection>
        <ContentGrid>
          <Column>
            <h2>联系我们</h2>
            <p>
              如果您对我们的产品和服务感兴趣，或者想要了解更多信息，欢迎通过以下方式联系我们：
            </p>
            <ul>
              <li>邮箱：contact@neuravoxel.com</li>
              <li>地址：上海市浦东新区张江高科技园区</li>
              <li>电话：+86 21 XXXX XXXX</li>
            </ul>
          </Column>
        </ContentGrid>
      </ContentSection>
    </PageContainer>
  );
};

export default ThreeColumnPage;