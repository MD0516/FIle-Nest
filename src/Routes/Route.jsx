import { createBrowserRouter} from "react-router-dom";
import Document from '../Components/ToolCard/Document'
import Image from '../Components/ToolCard/Image'
import Compress from '../Components/ToolCard/Compress'
import Layout from '../Layout/Layout'
import UploadZone from '../Components/UploadZone'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path:'doc-tools',
                element:<Document></Document>,
                children: [
                    {
                        path: 'pdf-to-word',
                        element: <UploadZone title='Convert PDF to Word' type='Select a PDF File' fileFormats='.pdf' multiple={true} errorFile='PDF' />
                    },
                    {
                        path: 'word-to-pdf',
                        element: <UploadZone title='Convert Word to PDF' type='Select a DOC or DOCX File' />
                    },
                    {
                        path: 'merge-pdfs',
                        element: <UploadZone title='Merge PDFs' type='Select Pdf Files' />
                    },
                    {
                        path: 'img-to-pdf',
                        element: <UploadZone title='Convert Image to PDF' type='Select JPG, PNG, JPEG any Image files' />
                    },
                    {
                        path: 'pdf-to-imgs',
                        element: <UploadZone title='Convert PDF to Images' type='Select a PDF File' />
                    },
                ]
            },
            {
                path: 'img-tools',
                element: <Image></Image>,
                children:[
                    {
                    path: 'any-to-jpg',
                    element: <UploadZone title='Convert to JPG' type='Select PNG, WebP, or HEIC files' fileFormats='.png,.webp,.jpeg,.heic' multiple={true} errorFile='image' />
                    },
                    {
                    path: 'any-to-png',
                    element: <UploadZone title='Convert to PNG' type='Select JPG, WebP, or HEIC files' fileFormats='.jpg,.jpeg,.webp,.heic' multiple={true} errorFile='image' />
                    },
                    {
                    path: 'any-to-webp',
                    element: <UploadZone title='Convert to WebP' type='Select JPG or PNG files' fileFormats='.jpg,.jpeg,.png' multiple={true} errorFile='image' />
                    },
                    {
                    path: 'resize-image',
                    element: <UploadZone title='Resize Image' type='Select image files to resize' fileFormats='.jpg,.jpeg,.png,.webp' multiple={false} errorFile='image' />
                    },
                    {
                    path: 'heic-to-any',
                    element: <UploadZone title='HEIC to Any Format' type='Select HEIC files' fileFormats='.heic' multiple={true} errorFile='HEIC image' />
                    },
                    {
                    path: 'any-to-svg',
                    element: <UploadZone title='Convert to SVG' type='Select PNG or JPG files' fileFormats='.png,.jpg,.jpeg' multiple={false} errorFile='image' />
                    }
                ]
            },
            {
                path: 'compress-tools',
                element: <Compress></Compress>,
                children: [
                    {
                    path: 'compress-pdf',
                    element: <UploadZone title='Compress PDF' type='Select PDF files' fileFormats='.pdf' multiple={false} errorFile='PDF' />
                    },
                    {
                    path: 'compress-image',
                    element: <UploadZone title='Compress Image' type='Select JPG, PNG, or WebP files' fileFormats='.jpg,.jpeg,.png,.webp' multiple={true} errorFile='image' />
                    },
                    {
                    path: 'compress-video',
                    element: <UploadZone title='Compress Video' type='Select MP4, MOV, or AVI files' fileFormats='.mp4,.mov,.avi' multiple={false} errorFile='video' />
                    },
                    {
                    path: 'compress-audio',
                    element: <UploadZone title='Compress Audio' type='Select MP3 or WAV files' fileFormats='.mp3,.wav' multiple={false} errorFile='audio' />
                    },
                    {
                    path: 'compress-docx',
                    element: <UploadZone title='Compress DOCX' type='Select DOCX files' fileFormats='.docx' multiple={false} errorFile='DOCX' />
                    },
                    {
                    path: 'compress-pptx',
                    element: <UploadZone title='Compress PPTX' type='Select PPTX files' fileFormats='.pptx' multiple={false} errorFile='PPTX' />
                    },
                    {
                    path: 'compress-xlsx',
                    element: <UploadZone title='Compress XLSX' type='Select XLSX files' fileFormats='.xlsx' multiple={false} errorFile='XLSX' />
                    },
                    {
                    path: 'zip-files',
                    element: <UploadZone title='ZIP Files' type='Select files to ZIP' fileFormats='' multiple={true} errorFile='files' />
                    }
                ]
            }
        ]
    }
])