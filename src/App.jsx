import { useEffect, useRef, useState } from 'react'
import Card from './components/Card'
import analytics from './assets/analytic.png'
import dashboard from './assets/dashboard.png'
import integrations from './assets/integration.png'
import messages from './assets/message.png'
import teams from './assets/team.png'
import projects from './assets/folder.png'
import cart from './assets/cart.png'
import money from './assets/money.png'
import user from './assets/user.png'
import bell from './assets/bell.png'
import question from './assets/question.png'
import file from './assets/file.png'
import importIcon from './assets/import.png'
import exportIcon from './assets/export.png'
import Table from './components/Table'

function App() {

  return (
    <>
      <div className="container">
        <div class="header">
          <h1 className='text-2xl font-bold text-pink-400'>Dashboard</h1>
          <div className='w-1/2 flex items-center justify-end'>
            <input className='bg-gray-100 w-1/2 h-8 rounded-lg p-3' placeholder="Search..." type="text" name="" id="" />
            <img className='w-6 h-6 ml-3' src={bell} alt="" />
            <img className='w-6 h-6 ml-3' src={question} alt="" />
            <img className='w-10 h-10 ml-3' src={user} alt="" />
          </div>
        </div>
        <div class="menu">
          <h1 className='text-3xl font-semibold mb-4'>Logo</h1>
          <div className='flex flex-col'>
            <a
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/dashboard"
            >
              <img src={dashboard} alt="Dashboard Icon" className="w-5 h-5" />
              Dashboard
            </a>
            <a
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/projects"
            >
              <img src={projects} alt="Dashboard Icon" className="w-5 h-5" />
              Projects
            </a>
            <a
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/teams"
            >
              <img src={teams} alt="Dashboard Icon" className="w-5 h-6" />
              Teams
            </a>
            <a
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/analytics"
            >
              <img src={analytics} alt="Dashboard Icon" className="w-5 h-5" />
              Analytics
            </a>
            <a
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/messages"
            >
              <img src={messages} alt="Dashboard Icon" className="w-5 h-5" />
              Messages
            </a>
            <a
              className="w-full p-3 bg-white hover:bg-pink-400 mb-2 rounded-lg text-gray-500 hover:text-white font-medium flex items-center gap-2"
              href="/integrations"
            >
              <img src={integrations} alt="Dashboard Icon" className="w-5 h-5" />
              Intergrations
            </a>
          </div>
        </div>
        <div class="content">
          <h1 className='text-lg font-bold mb-6 mt-2 flex items-center gap-1.5'>
            <img src={dashboard} alt="Dashboard Icon" className="w-5 h-5" />
            Overview
          </h1>
          <div className='flex justify-around'>
            <Card title={'Turnover'} total={'92,405'} percentage={'5.39'} icon={cart} color={'pink'}></Card>
            <Card title={'Turnover'} total={'92,405'} percentage={'5.39'} icon={money}></Card>
            <Card title={'Turnover'} total={'92,405'} percentage={'5.39'} icon={user}></Card>
          </div>
          <div className='flex mt-5 justify-around'>
            {/* text */}
            <h1 className='text-lg font-bold mb-6 mt-5 flex items-center gap-1.5'>
              <img src={file} alt="Dashboard Icon" className="w-5 h-5" />
              Detailed report
            </h1>
            {/* button group */}
            <div className='ml-auto flex items-center gap-2'>
              <button className='flex items-center border-2 rounded-lg p-2 hover:bg-pink-300 hover:text-white'>
                <img className='w-5 h-5 mr-2' src={importIcon} alt="" />
                Import
              </button>
              <button className='flex items-center border-2 rounded-lg p-2 hover:bg-pink-300 hover:text-white'>
                <img className='w-5 h-5 mr-2' src={exportIcon} alt="" />
                Export
              </button>
            </div>
          </div>
          {/* datatable part */}
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <Table></Table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
