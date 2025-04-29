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
        title="Three Column"
        subtitle="A generic three column layout"
      />

      <ContentSection>
        <ContentGrid>
          <Column>
            <h2>Computer Graphic</h2>
            <ul>
              <li><a target="_blank" href="https://www.realtimerendering.com/index.html">realtimerendering</a></li>
            </ul>
          </Column>

          {/* <Column>
            <h2>Column Two</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl.
            </p>
            <p>
              Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem.
            </p>
          </Column>
          
          <Column>
            <h2>Column Three</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl.
            </p>
            <p>
              Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem.
            </p>
          </Column> */}
        </ContentGrid>
      </ContentSection>

      <ContentSection>
        <ContentGrid>
          <Column>
            <h2>Robotic</h2>
            <ul>
              <li><a target="_blank" href=" https://fishros.com/d2lros2/">2lros2</a></li>
            </ul>
          </Column>

          {/* <Column>
            <h2>Column Two</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl.
            </p>
            <p>
              Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem.
            </p>
          </Column>
          
          <Column>
            <h2>Column Three</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl.
            </p>
            <p>
              Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem.
            </p>
          </Column> */}
        </ContentGrid>
      </ContentSection>

      <ContentSection>
        <ContentGrid>
          <Column>
            <h2>Artificial intelligence</h2>
          </Column>

          {/* <Column>
            <h2>Column Two</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl.
            </p>
            <p>
              Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem.
            </p>
          </Column>
          
          <Column>
            <h2>Column Three</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac quam risus, at tempus justo. Sed dictum rutrum massa eu volutpat. Quisque vitae hendrerit sem. Pellentesque lorem felis, ultricies a bibendum id, bibendum sit amet nisl.
            </p>
            <p>
              Mauris et lorem quam. Maecenas rutrum imperdiet vulputate. Nulla quis nibh ipsum, sed egestas justo. Morbi ut ante mattis orci convallis tempor. Etiam a lacus a lacus pharetra porttitor quis accumsan odio.
            </p>
            <p>
              Sed porttitor cras in erat nec felis varius pellentesque. Nullam scelerisque blandit leo. Donec imperdiet, tellus sit amet congue volutpat, diam urna accumsan elit, eu hendrerit magna ligula ac lorem.
            </p>
          </Column> */}
        </ContentGrid>
      </ContentSection>
    </PageContainer>
  );
};

export default ThreeColumnPage;