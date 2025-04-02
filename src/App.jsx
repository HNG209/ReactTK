import { useState } from 'react'
import Card from './components/Card'
// import newest from 'src/assets/newest.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div class="header">
          <h1 className='text-2xl font-bold text-pink-400'>Dashboard</h1>
          <div className='w-1/2'>
            <input className='bg-gray-200 w-1/2 h-8 rounded-lg p-3' type="text" name="" id="" />
          </div>
        </div>
        <div class="menu">
          <h1 className='text-3xl font-semibold mb-4'>Logo</h1>
          <div className='flex flex-col'>
            <a className='w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium' href="/dashboard">Dashboard</a>
            <a className='w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium' href="/projects">Projects</a>
            <a className='w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium' href="/teams">Teams</a>
            <a className='w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium' href="/analytics">Analytics</a>
            <a className='w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium' href="/messages">Messages</a>
            <a className='w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium' href="/integrations">Integrations</a>
          </div>
        </div>
        <div class="content">
          <h1 className='text-lg font-bold mb-4'>Overview</h1>
          <div className='flex justify-around'>
            <Card title={'Turnover'} total={'92,405'} percentage={'5.39'}></Card>
            <Card title={'Turnover'} total={'92,405'} percentage={'5.39'}></Card>
            <Card title={'Turnover'} total={'92,405'} percentage={'5.39'}></Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
