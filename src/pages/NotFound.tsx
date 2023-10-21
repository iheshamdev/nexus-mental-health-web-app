import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
        <h1>NotFound page... Nothing to see here</h1>
        <Link to="/">Go to home page</Link>
    </div>
  )
}

export default NotFound