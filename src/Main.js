
import '../src/styles/main.scss';
import Courses from './components/Courses.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import MainSectionTati from './components/MainSectionTati.jsx';

export default function App(){
  return(
    <div className='App'>
      <Header/> 
      <MainSectionTati/>
      <Courses/>
      <Footer/>
    </div>
  )
}