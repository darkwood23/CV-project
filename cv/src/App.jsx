import './styles/App.css'
import General from './components/general-info'
import streetPhoto from './assets/street-photo.jpg'
import Education from './components/education-info'
import Practical from './components/practical-info'

function App() {

  return (
    <div id='all-elements'>
      <div className='photo'>
                <img src={streetPhoto} className='street-photo'/>
                <p className='text-on-image'>Photo by <a href='https://unsplash.com/@leronep'>Lerone Pieters</a> on <a href='https://unsplash.com'>Unsplash</a></p>
      </div>
      <form id='all-forms'>
        <h1>C.V.</h1>
        <General />
        <Education />
        <Practical />
      </form>
    </div>
  )
}

export default App
