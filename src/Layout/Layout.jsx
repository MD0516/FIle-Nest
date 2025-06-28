import { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar'
import { Outlet, useLocation, Link } from 'react-router-dom'
import Document, { docTools } from '../Components/ToolCard/Document';
import Image, { imgTools } from '../Components/ToolCard/Image';
import Compress, { comTools } from '../Components/ToolCard/Compress';
import NavPath from '../Components/NavPath';
import { AnimatePresence, motion } from 'framer-motion';

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

  const [ isOpen, setIsOpen ] = useState(false);

  const navLink = [
    {
        path: '/doc-tools',
        title: 'Document Tools'
    },
    {
        path: '/img-tools',
        title: 'Image Tools'
    },
    {
        path: '/compress-tools',
        title: 'Compression Tools'
    },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const [ isMobile, setIsMobile ] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 768;
      setIsMobile(!isDesktop);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize) ;
  })

  return (
    <div>
      <div className='h-full '>
        <Navbar state={setIsOpen} />
        { isMobile &&
        <>
          <div className={`p-5 cursor-pointer absolute items-center justify-center text-[var(--primary-text)] z-[100] ${ isOpen ? 'mobile-menu-close' : 'mobile-menu-open' }`} onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? (
              <motion.svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 20 20"><path fill="currentColor" d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15l-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152l2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></motion.svg>) : (
              <motion.svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0 12a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm0-6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2h-9.738l-2.647 2.648L4.967 13H4a1 1 0 0 1-1-1Z"/></motion.svg>)
            }
          </div>
          <AnimatePresence>
            {isOpen ? (<motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity: 1}} exit={{ scale: 0, opacity: 0}} transition={{ duration: .2, ease: 'linear'}}  className={`absolute z-[100]  w-[100%] flex items-center justify-center mt-3 `} onClick={() =>setIsOpen(false)} >
                <div className="flex flex-col justify-center gap-5 w-[80%] bg-[var(--primary-bg)] text-[var(--primary-text)] p-7 rounded-2xl">
                    { navLink.map((items, i) => {
                        return (
                            <Link key={i} to={items.path} className="text-2xl" onClick={() => setIsOpen(false)}>{items.title}</Link>
                        )
                    })}             
                </div>
            </motion.div>) : (null)}
          </AnimatePresence>
            { isOpen && <motion.div initial={{ opacity: 0, x: -10}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: -10}} transition={{ duration: .15, ease: 'linear'}}  className='menu-open w-[50%]' onClick={ () => setIsOpen(false)}></motion.div>}
            { isOpen && <motion.div initial={{ opacity: 0, x: 10}} animate={{ opacity: 1, x: 0}} exit={{ opacity: 0, x: 10}} transition={{ duration: .15, ease: 'linear'}}  className='menu-open w-[50%]' onClick={ () => setIsOpen(false)}></motion.div>}
        </>
        }
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