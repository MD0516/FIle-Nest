import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion, scale } from "framer-motion";

const Navbar = ({state}) => {
    const setDarkTheme = () => {
        document.documentElement.style.setProperty('--primary-bg', '#1E201E');
        document.documentElement.style.setProperty('--primary-card-bg', '#3C3D37');
        document.documentElement.style.setProperty('--primary-btn', '#697565');
        document.documentElement.style.setProperty('--primary-text', '#ECDFCC');
        document.documentElement.style.setProperty('--secondary-bg', '#697565');
    };

    const setLightTheme = () => {
        document.documentElement.style.setProperty('--primary-bg', '#F8FAFC');
        document.documentElement.style.setProperty('--primary-text', '#3D3D3D');
        document.documentElement.style.setProperty('--primary-card-bg', '#D9EAFD');
        document.documentElement.style.setProperty('--primary-btn', '#9AA6B2');
        document.documentElement.style.setProperty('--secondary-bg', '#BCCCDC');
    };

    useEffect( () => {
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme === 'light') {
            setLightTheme();
            setIsDark(false)
        } else {
            setDarkTheme();
            setIsDark(true)
        }
    })

    const [ isDark, setIsDark ] = useState(false);

    const handleClick = () => {
        setIsDark(prev => {
            const newMode = !prev;
            if (newMode) {
                setDarkTheme();
                localStorage.setItem('theme', 'dark');
            } else {
                setLightTheme();
                localStorage.setItem('theme', 'light')
            }
            return newMode;
        });
    };

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
    <>
        {isMobile ? (
            <>
                <div>
                    <div className="bg-[var(--primary-bg)] text-[var(--primary-text)] flex items-center justify-between h-15">
                        <h1 className='p-5 font-bold text-xl z-[100]' onClick={() => state(false)}>
                            <Link to='/'>File Nest</Link> 
                        </h1>                       
                    </div>

                    <motion.div whileTap={{ y:1}} className="absolute top-0.5 right-15 p-1 text-[var(--primary-text)] z-[100]">
                        <div className="p-2 flex items-center justify-between mr-3 gap-1 theme-toggle" onClick={handleClick}>
                            { !isDark ? (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14q1.2 0 2.2.65t1.475 1.775l.25.575h.625q1.05 0 1.75.738T13 19.5q0 1.05-.725 1.775T10.5 22H6q-1.65 0-2.825-1.175T2 18q0-1.675 1.175-2.838T6 14Zm5.25-11q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5T23 14.75q-.65 3.55-3.375 5.863T13.325 23q.8-.65 1.238-1.563T15 19.5q0-1.7-1.063-2.938t-2.712-1.487q-.8-1.425-2.187-2.25T6 12q-.8 0-1.563.2T3 12.8q.05-3.625 2.363-6.375T11.25 3Z"/></svg>) :                           
                            (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1023"><path fill="currentColor" d="M1024 374q-97 62-96 137q2 78 96 137q-255 12-137 238q-227-118-238 137q-62-97-137-96q-77 2-137 96q-11-255-238-137Q255 660 0 648q97-62 96-137q-2-77-96-137q255-11 137-237Q364 254 375 0q60 93 137 95q75 2 137-95q11 254 238 137q-118 226 137 237zM512 191q-87 0-161 43T234.5 350.5T192 511t42.5 161T351 788.5T512 831t161-42.5T789.5 672T832 511t-42.5-160.5T673 234t-161-43zm0 576q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75z"/></svg>)}
                        </div>
                    </motion.div>
                </div>
            </> ) : (
            <div className='bg-[var(--primary-bg)] text-[var(--primary-text)] flex items-center justify-between h-15'>
                <h1 className='p-5 font-bold text-xl'>
                    <Link to='/'>File Nest</Link> 
                </h1>

                <div className="p-5 font-bold text-lg flex gap-20">
                    { navLink.map((items, i) => {
                        return (
                            <Link key={i} to={items.path}>{items.title}</Link>
                        )
                    })}  
                </div>

                <div className="p-5 flex items-center justify-between bg-[var(primary-card-bg)] mr-3 gap-1 theme-toggle" onClick={handleClick}>
                        { !isDark ? (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M6 14q1.2 0 2.2.65t1.475 1.775l.25.575h.625q1.05 0 1.75.738T13 19.5q0 1.05-.725 1.775T10.5 22H6q-1.65 0-2.825-1.175T2 18q0-1.675 1.175-2.838T6 14Zm5.25-11q-.45 2.475.275 4.838t2.5 4.137q1.775 1.775 4.138 2.5T23 14.75q-.65 3.55-3.375 5.863T13.325 23q.8-.65 1.238-1.563T15 19.5q0-1.7-1.063-2.938t-2.712-1.487q-.8-1.425-2.187-2.25T6 12q-.8 0-1.563.2T3 12.8q.05-3.625 2.363-6.375T11.25 3Z"/></svg>) :                           
                        (<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1023"><path fill="currentColor" d="M1024 374q-97 62-96 137q2 78 96 137q-255 12-137 238q-227-118-238 137q-62-97-137-96q-77 2-137 96q-11-255-238-137Q255 660 0 648q97-62 96-137q-2-77-96-137q255-11 137-237Q364 254 375 0q60 93 137 95q75 2 137-95q11 254 238 137q-118 226 137 237zM512 191q-87 0-161 43T234.5 350.5T192 511t42.5 161T351 788.5T512 831t161-42.5T789.5 672T832 511t-42.5-160.5T673 234t-161-43zm0 576q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75z"/></svg>)}
                </div>

            </div>
        )}
    </>
  )
}

export default Navbar