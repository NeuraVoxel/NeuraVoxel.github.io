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
      title: 'Autonomous Driving',
      description: 'Build a closed loop of autonomous driving data, such as data collection, data conversion, data visualization, and data simulation, and generate data through world models.',
      imageUrl: '/images/ad.png',
      buttonLink: '#'
    },
    {
      id: 2,
      title: 'Robotics',
      description: 'Visualize all your robotic data in one integrated platform.',
      imageUrl: '/images/robotic.png',
      buttonLink: '#'
    },
    {
      id: 3,
      title: 'Simulation',
      description: `Simulate before you build.`,  
      imageUrl: '/images/simulcation.png',
    },
    {
      id: 4,
      title: 'HMI',
      description: `The entrance for communication between vehicles and people.`,  
      imageUrl: '/images/hmi.png',
    },
    {
      id: 5,
      title: 'Digital Twining',
      description: `Aims to enhance the design and operational efficiency of enterprise customers and is committed to achieving cross-industry digital and intelligent transformation.`,
      imageUrl: '/images/twin.png',
      buttonLink: '#'
    },
    {
      id: 6,
      title: 'CAD & BIM',
      description: `Precision drawings and modern manufacturing.`,
      imageUrl: '/images/cad.png',
      buttonLink: 'https://pattern-x.github.io/gemini-viewer-examples/'
    },
    {
      id: 7,
      title: 'Data Conversion',
      description: `Data conversion is an important step in data processing.`,
      imageUrl: '/images/data-conversion.png',
    },
    {
      id: 8,
      title: 'Data Closed Loop',
      description: `Data-driven end-to-end data closed loop accelerates industrial implementation.`,
      imageUrl: '/images/data_closed_loop.png',
    },
  ];

  return (
    <HomeContainer>

      <Banner
        title="Welcome to the world of NeuraVoxel"
        subtitle="Combines AI and computer graphics rendering to turn complex AI data into vivid visuals, helping researchers understand and explore better."
        buttonText="Explore examples"
        buttonLink="https://rerun.io/examples"
      // buttonText2="Explore examples" 
      // buttonLink2="https://rerun.io/examples" 
      />

      <FeaturesSection>
        <FeaturesGrid>
          {features.map(feature => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              buttonLink={feature.buttonLink}
            />
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      <ContentSection>
        <ContentGrid>
          <MainContent>
            <h2>NeuraVoxel Workflow</h2>
            {/* <p>
              This is <strong>NeuraVoxel</strong>, a fully responsive HTML5 site template designed by <a href="http://twitter.com/ajlkn">AJ</a> and released for free by <a href="http://html5up.net">HTML5 UP</a>. It features a simple, lightweight design, solid HTML5 and CSS3 code, and full responsive support for desktop, tablet, and mobile displays.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl. Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem. Vivamus posuere laoreet dolor ut viverra. Etiam vestibulum elementum euismod. Cras ornare feugiat erat a sollicitudin. Quisque ac orci vitae lectus tincidunt lobortis.
            </p> */}

            {/* 技术架构图部分 */}
            <section style={{ padding: '0rem 0', backgroundColor: 'var(--light-white)', textAlign: 'left' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                {/* <h2 style={{ marginBottom: '1.5rem', color: 'var(--secondary-color)' }}>技术架构</h2> */}
                <p style={{ marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                  NeuraVoxel adopts an advanced technical architecture, perfectly integrating artificial intelligence with computer graphics to provide you with a powerful data visualization solution.
                </p>
                <div style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
                  <img
                    src="/images/architecture2.png"
                    alt="NeuraVoxel 技术架构图"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            </section>
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