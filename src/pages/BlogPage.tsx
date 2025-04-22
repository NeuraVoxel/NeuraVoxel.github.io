import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import blogPostsData from '../blogs';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: var(--text-color);
    max-width: 700px;
    margin: 0 auto;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const BlogContent = styled.div`
  padding: 1.5rem;
  
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }
  
  .date {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .read-more {
    color: var(--primary-color);
    font-weight: 500;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// 模拟博客数据
const blogPosts = [
  // {
  //   id: 1,
  //   title: '使用 NeuraVoxel 可视化自动驾驶数据',
  //   date: '2023-05-15',
  //   excerpt: 'NeuraVoxel 提供了强大的工具来可视化和分析自动驾驶数据，帮助研究人员更好地理解复杂的场景和行为模式。本文将介绍如何使用 NeuraVoxel 进行自动驾驶数据的可视化和分析。',
  //   imageUrl: '/images/blog/ad.png',
  //   slug: 'visualizing-autonomous-driving-data'
  // },
//   {
//     id: 2,
//     title: '机器人数据可视化的最佳实践',
//     date: '2023-04-28',
//     excerpt: '机器人系统产生的数据通常是多模态的，包括传感器数据、控制信号和环境信息。本文分享了使用 NeuraVoxel 进行机器人数据可视化的最佳实践和技巧。',
//     imageUrl: '/images/blog/ad.png',
//     slug: 'best-practices-for-robotics-data-visualization'
//   },
//   {
//     id: 3,
//     title: '数字孪生技术在工业应用中的前景',
//     date: '2023-04-10',
//     excerpt: '数字孪生技术正在改变工业设计和运营的方式。本文探讨了数字孪生技术的最新进展，以及 NeuraVoxel 如何帮助企业实现数字化转型。',
//     imageUrl: '/images/blog/ad.png',
//     slug: 'future-of-digital-twin-in-industry'
//   },
//   {
//     id: 4,
//     title: 'AI 与计算机图形学的融合',
//     date: '2023-03-22',
//     excerpt: 'AI 和计算机图形学的结合正在创造新的可能性。本文讨论了这两个领域的交叉点，以及 NeuraVoxel 如何利用这种融合来提供更强大的可视化解决方案。',
//     imageUrl: '/images/blog/ad.png',
//     slug: 'fusion-of-ai-and-computer-graphics'
//   },
//   {
//     id: 5,
//     title: '实时数据可视化的挑战与解决方案',
//     date: '2023-03-05',
//     excerpt: '实时数据可视化面临着性能、准确性和可用性等多方面的挑战。本文分析了这些挑战，并介绍了 NeuraVoxel 提供的解决方案。',
//     imageUrl: '/images/blog/ad.png',
//     slug: 'challenges-and-solutions-for-realtime-visualization'
//   },
//   {
//     id: 6,
//     title: '使用 NeuraVoxel 进行科学研究数据可视化',
//     date: '2023-02-18',
//     excerpt: '科学研究产生的大量数据需要有效的可视化工具来帮助分析和理解。本文展示了 NeuraVoxel 在科学研究数据可视化中的应用案例。',
//     imageUrl: '/images/blog/ad.png',
//     slug: 'scientific-research-data-visualization'
//   }
];

const BlogPage: React.FC = () => {
  return (
    <BlogContainer>
      <BlogHeader>
        {/* <h1>NeuraVoxel 博客</h1> */}
        {/* <p>探索 AI 可视化的前沿，了解 NeuraVoxel 如何帮助研究人员和企业更好地理解和分析复杂数据。</p> */}
      </BlogHeader>
      
      <BlogGrid>
        {Object.entries(blogPostsData).map(([slug, post]) => (
          <BlogCard key={slug}>
            <BlogImage>
              <img src={post.imageUrl} alt={post.title} />
            </BlogImage>
            <BlogContent>
              <h3>{post.title}</h3>
              <span className="date">{post.date}</span>
              <p>{post.excerpt || '点击阅读更多了解详情...'}</p>
              <Link to={`/blog/${slug}`} className="read-more">
                阅读更多 →
              </Link>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogPage;