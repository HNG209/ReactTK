import analytics from './assets/analytic.png'
import dashboard from './assets/dashboard.png'
import integrations from './assets/integration.png'
import messages from './assets/message.png'
import teams from './assets/team.png'
import projects from './assets/folder.png'
import Dashboard from './components/Dashboard'
import Teams from './components/Teams'
import Projects from './components/Projects'
import Analytics from './components/Analytics'
import Messages from './components/Messages'
import Inter from './components/Intergrations'
import { Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="container">
        <div className="menu">
          <h1 className='text-3xl font-semibold mb-4'>Logo</h1>
          <div className='flex flex-col'>
            <Link to={"/dashboard"}
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
            >
              <img src={dashboard} alt="Dashboard Icon" className="w-5 h-5" />
              Dashboard
            </Link>
            <Link to={"/projects"}
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
            >
              <img src={projects} alt="Dashboard Icon" className="w-5 h-5" />
              Projects
            </Link>
            <Link to={"/teams"}
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
            >
              <img src={teams} alt="Dashboard Icon" className="w-5 h-6" />
              Teams
            </Link>
            <Link to={"/analytics"}
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
            >
              <img src={analytics} alt="Dashboard Icon" className="w-5 h-5" />
              Analytics
            </Link>
            <Link to={"/messages"}
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
            >
              <img src={messages} alt="Dashboard Icon" className="w-5 h-5" />
              Messages
            </Link>
            <Link to={"/integrations"}
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/integrations"
            >
              <img src={integrations} alt="Dashboard Icon" className="w-5 h-5" />
              Intergrations
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/integrations" element={<Inter />} />
        </Routes>
      </div>
    </>
  )
}

export default App
