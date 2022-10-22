import { useState, useEffect } from 'react';
import About from './sections/About';
import Contact from './sections/Contact';
import Introduction from './sections/Introduction';
import ProjectModal from './sections/ProjectModal';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import { ProjectModalType } from './types';

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

  const [appStyle, setAppStyle] = useState<React.CSSProperties>({overflow : 'unset'})

  useEffect(() => {
    if (modalOpen) {
      setAppStyle({
        width: '100vw',
        height: '100vh',
        boxSizing: 'border-box',
        overflow : 'hidden'
      })
    } else {
      setAppStyle({overflow : 'unset'})
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen])
  
  return (
    <div className="App" style={appStyle}>
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
