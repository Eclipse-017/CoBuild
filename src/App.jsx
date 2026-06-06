import './App.css'
import ImageSection from './components/imageSection/ImageSection'
import './components/imageSection/imageSection.css'
import VideoSection from './components/VideoSection/VideoSection'

function App(){
  return( 
    <>
      <ImageSection />
      <VideoSection src='/public/video/video.mp4'/>
    </>
  )
}

export default App
