import { useState, useEffect } from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Introduction from './sections/Introduction';
import ProjectModal from './sections/ProjectModal';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import { ProjectModalType } from './types';
import logVisit from './utils/logger';

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<ProjectModalType>('sideQuest')
  const openModal = (modalType: ProjectModalType) => {
    setModalType(modalType)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
    setModalType(null)
  }

  useEffect(()=>{
    logVisit();
  }, [])
  
  return (
    <div className="App">
      <Introduction />
      <About />
      <Skills />
      <Projects openModal={openModal} />
      <Contact />


      {modalOpen && <ProjectModal closeModal={closeModal} modalType={modalType} />}
    </div>
  );
}

export default App;
