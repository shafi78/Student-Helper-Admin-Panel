import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import AddQNAData from './QNA/AddQNAData';
import QNASection from './QNA/QNASection';
import AddWebData from './Webinar/AddWebData';
import WebSection from './Webinar/WebSection';
import BlogsSection from './Blogs/BlogsSection';
import AddAptitudeData from './Aptitude/AddAptitudeData';
import AptitudeSection from './Aptitude/AptitudeSection';
import AddAptitudeContest from './Aptitude/AddAptitudeContest';
import AptContestSection from './Aptitude/AptContestSection';
import AptContestResults from './Aptitude/AptContestResults';
import AddDsaData from './DSA/AddDsaData';
import DsaSection from './DSA/DsaSection';
import AddDsaContest from './DSA/AddDsaContest';
import ManageDsaContest from './DSA/ManageDsaContest';
import ManageDsaResults from './DSA/ManageDsaResults';
import ManageCourse from './Courses/ManageCourse';
import LoginForm from './Login/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />

    {/* QNA Section */}

    <Route path="/addQNA" element={<AddQNAData />} />
    <Route path="/manageQNA" element={<QNASection />} />

    
    {/* Webinar Section */}

    <Route path="/addwebinar" element={<AddWebData />} />
    <Route path="/managewebinar" element={<WebSection />} />

    
    {/* Blogs Section */}

    <Route path="/manageblogs" element={<BlogsSection />} />
    
    
    {/* Aptitude Section */}

    <Route path="/aptquiz" element={<AddAptitudeData/>} />
    <Route path="/managequiz" element={<AptitudeSection/>} />
    <Route path="/aptcontest" element={<AddAptitudeContest/>} />
    <Route path="/manageaptcontest" element={<AptContestSection/>} />
    <Route path="/manageaptresults" element={<AptContestResults/>} />


    {/* DSA Section */}

    <Route path="/dsaQna" element={<AddDsaData />} />
    <Route path="/managedsa" element={<DsaSection />} />
    <Route path="/dsacontest" element={<AddDsaContest />} />
    <Route path="/dsacontest" element={<AddDsaContest />} />
    <Route path="/managedsacontest" element={<ManageDsaContest />} />
    <Route path="/managedsaresults" element={<ManageDsaResults />} />

    {/* Course Section */}
    <Route path="/courses" element={<ManageCourse />} />


   </Routes>
   </BrowserRouter>
  );
}

export default App;
