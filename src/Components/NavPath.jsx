import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

const NavPath = () => {

    const [ dirName, setDirName ] = useState('');
    const [ childName, setChildName ] = useState('');
    const location = useLocation();
    const pathOne = location.pathname.split('/')[1];
    const pathTwo = location.pathname.split('/')[2];

    const docPath = [ 'pdf-to-word', 'word-to-pdf', 'merge-pdfs', 'img-to-pdf', 'pdf-to-imgs']
    const imagePath = [ 'any-to-jpg', 'any-to-png', 'any-to-webp', 'resize-image', 'heic-to-any', 'any-to-svg' ]
    const compressPath = [ 'compress-pdf', 'compress-image', 'compress-video', 'compress-audio', 'compress-docx', 'compress-pptx', 'compress-xlsx', 'zip-files',]

    useEffect(() => {
        const pathName = () => {
            if ( pathOne === 'doc-tools' ) {
                setDirName('Document Tools ')
            } else if ( pathOne === 'img-tools' ) {
                setDirName('Image Tools ')
            } else if ( pathOne === 'compress-tools' ) {
                setDirName('Compression Tools ')
            } else {
                setDirName('')
            }
        }

        pathName();
    })  

    useEffect (() => {
        const current = pathTwo;
        const childPath = () => {
            switch (current) {
                case 'pdf-to-word':
                    setChildName('PDF To Word')
                    break;
                case 'word-to-pdf':
                    setChildName('Word To PDF')
                    break;
                case 'merge-pdfs':
                    setChildName('Merge PDFs')
                    break;
                case 'img-to-pdf':
                    setChildName('Image To PDF')
                    break;
                case 'pdf-to-imgs':
                    setChildName('PDF To Images')
                    break;
                case 'any-to-jpg':
                    setChildName('Image To JPG')
                    break;
                case 'any-to-png':
                    setChildName('Image To PNG')
                    break;
                case 'any-to-webp':
                    setChildName('Image To WEBP')
                    break;
                case 'resize-image':
                    setChildName('Resize Image')
                    break;
                case 'heic-to-any':
                    setChildName('HEIC To Any Format')
                    break;
                case 'any-to-svg':
                    setChildName('Image To SVG')
                    break;
                case 'compress-pdf':
                    setChildName('Compress PDF')
                    break;
                case 'compress-image':
                    setChildName('Compress Image')
                    break;
                case 'compress-video':
                    setChildName('Compress Video')
                    break;
                case 'compress-audio':
                    setChildName('Compress Audio')
                    break;
                case 'compress-docx':
                    setChildName('Compress Word Files')
                    break;
                case 'compress-pptx':
                    setChildName('Compress Power Point Files')
                    break;
                case 'compress-xlsx':
                    setChildName('Compress Excel Files')
                    break;
                case 'zip-files':
                    setChildName('Archive To Zip')
                    break;
            
                default:
                    setChildName('');
                    break;
            }            
        }
        childPath();
    })
  return (
    <div className='py-5 px-10'>
        <div className='text-[var(--primary-text)] font-bold text-lg '>
            <Link to='/'>Home { pathOne ? '/' : ''} </Link>
            <Link to={pathOne} >
                {dirName} { pathTwo ? '/' : ''}
            </Link>
            <Link to={pathOne/pathTwo}> {childName}</Link>
        </div>
    </div>
  )
}

export default NavPath