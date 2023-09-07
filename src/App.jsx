import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home/Home";
import { ElementaryCourse, HighschoolCourse, CambridgeCource, ToeicIeltsCourse, GradeTenCourse, UniversityCourse, CommunicationCourse } from "./pages";


import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => (
  <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tieu-hoc" element={<ElementaryCourse />} />
        <Route path="/thcs-thpt" element={<HighschoolCourse />} />
        <Route path="/cambridge" element={<CambridgeCource />} />
        <Route path="/toeic-ielts" element={<ToeicIeltsCourse />} />
        <Route path="/lop10" element={<GradeTenCourse />} />
        <Route path="/daihoc" element={<UniversityCourse/>} />
        <Route path="/giao-tiep" element={<CommunicationCourse />} />
      </Routes>
      <Footer />    
    </BrowserRouter>
  </div>
)

export default App;