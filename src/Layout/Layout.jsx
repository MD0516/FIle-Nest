import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { Outlet, useLocation, Link } from 'react-router-dom'
import Document, { docTools } from '../Components/ToolCard/Document';
import Image, { imgTools } from '../Components/ToolCard/Image';
import Compress, { comTools } from '../Components/ToolCard/Compress';
import NavPath from '../Components/NavPath';

const Layout = () => {

  const location = useLocation();
  const current = location.pathname.split('/')[1];

  const [ isToolOpen, setIsToolOpen ] = useState(false);

  useEffect(() => {
    const validTools = [ 'doc-tools', 'img-tools', 'compress-tools' ]
    if (validTools.includes(current)){
      setIsToolOpen(true)
    } else {
      setIsToolOpen(false)
    }
  })

  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setIsMobile(!isDesktop);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize) ;
  });

  return (
    <div>
      <div className='h-full'>
        <Navbar />
      </div>
      
      <NavPath /> 
           
      {
        !isToolOpen && 
        <>
          <div className='flex flex-wrap items-center justify-center gap-2 p-3'>
            {
              docTools.map((item, i) => {
                return (
                  <Link to={item.route} key={i} className='border p-4 rounded-2xl bg-[var(--primary-card-bg)] text-[var(--primary-text)] link-tab flex flex-col items-center justify-center w-[180px] sm:w-[218px] h-[242px] sm:h-[214px]' >
                    <div className='p-2 icons'>  
                      {item.icon}
                    </div>                  
                    <h3 className='text-lg font-bold p-2'>{item.title}</h3>
                  </Link>
                )
              })
            }
            {
              imgTools.map((item, i) => {
                return (
                  <Link to={item.route} key={i} className='border p-4 rounded-2xl bg-[var(--primary-card-bg)] text-[var(--primary-text)] link-tab flex flex-col items-center justify-center w-[180px] sm:w-[218px] h-[242px] sm:h-[214px]' >
                    <div className='p-2 icons'>  
                      {item.icon}
                    </div>                  
                    <h3 className='text-lg font-bold p-2'>{item.title}</h3>
                  </Link>
                )
              })
            }
            {
              comTools.map((item, i) => {
                return (
                  <Link to={item.route} key={i} className='border p-4 rounded-2xl bg-[var(--primary-card-bg)] text-[var(--primary-text)] link-tab flex flex-col items-center justify-center w-[180px] sm:w-[218px] h-[242px] sm:h-[214px]' >
                    <div className='p-2 icons'>  
                      {item.icon}
                    </div>                  
                    <h3 className='text-lg font-bold p-2'>{item.title}</h3>
                  </Link>
                )
              })
            }
          </div>
        </>
      }
      <Outlet />
    </div>
  )
}

export default Layout