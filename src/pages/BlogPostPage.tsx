import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import blogPostsData from '../blogs';

const PostContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const PostHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
  
  .meta {
    display: flex;
    align-items: center;
    color: #888;
    margin-bottom: 2rem;
    
    .date {
      margin-right: 1rem;
    }
    
    .category {
      background-color: #f0f0f0;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
  }
  
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 2rem;
  }
`;

const PostContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  h2 {
    margin: 2rem 0 1rem;
    color: var(--secondary-color);
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  blockquote {
    border-left: 4px solid var(--primary-color);
    padding-left: 1rem;
    margin-left: 0;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #555;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  color: var(--text-color);
  text-decoration: none;
  
  &:hover {
    color: var(--primary-color);
  }
  
  &::before {
    content: '←';
    margin-right: 0.5rem;
  }
`;

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? blogPostsData[slug] : null;

    if (!post) {
        return (
            <PostContainer>
                <BackButton to="/blog">返回博客列表</BackButton>
                <h1>文章未找到</h1>
                <p>抱歉，您请求的文章不存在。</p>
            </PostContainer>
        );
    }

    return (
        <PostContainer>
            <BackButton to="/blog">返回博客列表</BackButton>

            <PostHeader>
                <h1>{post.title}</h1>
                <div className="meta">
                    <span className="date">{post.date}</span>
                    <span className="category">{post.category}</span>
                </div>
                <img src={post.imageUrl} alt={post.title} />
            </PostHeader>

            <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContainer>
    );
};

export default BlogPostPage;