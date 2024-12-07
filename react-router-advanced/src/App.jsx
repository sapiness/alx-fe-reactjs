import './App.css'
import Profile from 'C:/Users/uiuxs/OneDrive/Desktop/form-handling-react/alx-fe-reactjs/react-router-advanced/src/components/Profile';
import BlogPostDetails from './components/BlogPostDetails';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';


function App() {
 
  const BlogPost = () => {
    const { id } = useParams();
  return (
    <Router>
      <div>
        <h1>Blog Post</h1>
        <ul>
          <li><Link to={`/blog/${id}`}>View Post</Link></li>
        </ul>
        <Routes>
          <Route path="/blog/:id" element={<BlogPostDetails />} />
        </Routes>
      </div>
    </Router>
  );
};
  return (
  
  <>
  <Profile />
  <BlogPost />
  </>
   

  )
}

export default App
