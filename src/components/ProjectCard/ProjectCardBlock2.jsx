import ProjectCard from './ProjectCard.jsx';

function ProjectCardBlock2() {
  return (
    <>
      <ProjectCard
        name={'Asfaltics'}
        logo={'images/Asfaltics.png'}
        content={
          'Developed a graphical user interface (GUI) that interacts with OAK-D cameras for AI applications, connecting with the OAK-D API. Managed GPS data and video to assign GPS positions to each frame of the recorded videos.'
        }
        link={'https://www.ensign.edu/'}
      />
    </>
  );
}

export default ProjectCardBlock2;
