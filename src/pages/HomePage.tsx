import React from 'react';
import styled from 'styled-components';
import Banner from '../components/Banner';
import FeatureCard from '../components/FeatureCard';

const HomeContainer = styled.div`
  background-color: var(--light-gray);
`;

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled.section`
  padding: 4rem 0;
`;

const ContentGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
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

const Sidebar = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: var(--secondary-color);
  }
`;

const SidebarBox = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  
  ul {
    list-style: none;
    
    li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
      
      &:last-child {
        border-bottom: none;
      }
      
      a {
        color: var(--text-color);
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

const HomePage: React.FC = () => {
  // 模拟数据
  const features = [
    {
      id: 1,
      title: 'Put Something Here',
      description: 'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',
      imageUrl: '/images/pic01.jpg',
    },
    {
      id: 2,
      title: 'An Interesting Title',
      description: 'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',
      imageUrl: '/images/pic02.jpg',
    },
    {
      id: 3,
      title: 'Oh, and Finally This',
      description: 'Duis neque nisi, dapibus sed mattis et quis, nibh. Sed et dapibus nisl amet mattis, sed a rutrum accumsan sed. Suspendisse eu.',
      imageUrl: '/images/pic03.jpg',
    },
  ];

  return (
    <HomeContainer>
      <Banner 
        title="Welcome to the world of NeuraVoxel" 
        subtitle="Combines AI and computer graphics rendering to turn complex AI data into vivid visuals, helping researchers understand and explore better." 
        buttonText="Try browser demo" 
        buttonLink="https://rerun.io/viewer" 
        buttonText2="Explore examples" 
        buttonLink2="https://rerun.io/examples" 
      />
      
      <FeaturesSection>
        <FeaturesGrid>
          {features.map(feature => (
            <FeatureCard 
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
            />
          ))}
        </FeaturesGrid>
      </FeaturesSection>
      
      <ContentSection>
        <ContentGrid>
          <MainContent>
            <h2>Welcome to Minimaxing!</h2>
            <p>
              This is <strong>Minimaxing</strong>, a fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> and released for free by <a href="http://html5up.net">HTML5 UP</a>. It features a simple, lightweight design, solid HTML5 and CSS3 code, and full responsive support for desktop, tablet, and mobile displays.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem. Vivamus posuere laoreet dolor ut viverra. Etiam vestibulum elementum euismod. Cras ornare feugiat erat a sollicitudin. Quisque ac orci vitae lectus tincidunt lobortis.
            </p>
          </MainContent>
          
          <Sidebar>
            <SidebarBox>
              <h3>Interesting Stuff</h3>
              <ul>
                <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                <li><a href="#">Sed porttitor cras in erat nec</a></li>
                <li><a href="#">Felis varius pellentesque potenti</a></li>
                <li><a href="#">Nullam scelerisque blandit leo</a></li>
                <li><a href="#">Etiam feugiat condimentum</a></li>
              </ul>
            </SidebarBox>
            
            <SidebarBox>
              <h3>Something Else</h3>
              <ul>
                <li><a href="#">Aliquam imperdiet suscipit odio</a></li>
                <li><a href="#">Sed porttitor cras in erat nec</a></li>
                <li><a href="#">Felis varius pellentesque potenti</a></li>
                <li><a href="#">Nullam scelerisque blandit leo</a></li>
                <li><a href="#">Etiam feugiat condimentum</a></li>
              </ul>
            </SidebarBox>
          </Sidebar>
        </ContentGrid>
      </ContentSection>
    </HomeContainer>
  );
};

export default HomePage;