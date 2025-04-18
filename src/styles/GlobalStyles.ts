import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --light-gray: #f5f5f5;
    --dark-gray: #333;
    --text-color: #555;
    --header-color: #444;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', Arial, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-gray);
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--header-color);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  button {
    cursor: pointer;
    border: none;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: var(--accent-color);
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles;