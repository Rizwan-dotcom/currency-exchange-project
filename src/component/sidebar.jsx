import React from 'react'

export const Sidebar = () => {
  return (
    <aside className='fixed top-50 left-4 w-[280px] h-[100vh] rounded-lg shadow-md mt-5'>
      <div className="flex items-center h-20 space-x-2 pl-8 py-5">
  <img src="/images/logo.png" alt="Logo" className="w-8 h-5 mt-1" />
  <h1 className="text-md font-medium">dailyexchanger Dashboard</h1>
</div>
<hr className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 h-[1px]"/>
<nav>
  <ul><li>
    <a href="">
     
    </a>
    </li></ul>
</nav>
    </aside>
  )
}
