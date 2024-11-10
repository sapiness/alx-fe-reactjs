import WelcomeMessage from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app/src/components/WelcomeMessage'
import Header from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app/src/components/Header'
import MainContent from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app/src/components/MainContent'
import Footer from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app/src/components/Footer'
import UserProfile from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app/src/components/UserProfile'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfilePage from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app-props/src/components/ProfilePage';
import { UserContext } from 'C:/Users/uiuxs/OneDrive/Desktop/alx-fe-reactjs/alx-fe-reactjs/alx-react-app-props/UserContext'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserContext.Provider>
      <ProfilePage userData={userData} />;
      </UserContext.Provider>
    </>
  )
}

export default App
