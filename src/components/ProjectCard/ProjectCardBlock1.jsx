import ProjectCard from './ProjectCard.jsx';

function ProjectCardBlock1() {
  return (
    <>
      <ProjectCard
        name={'BYU'}
        logo={'images/BYU.png'}
        content={
          'Developed interactive activities and web pages using JavaScript, CSS, and HTML for BYUs continuing education. Collaborated with the math team to create accessible and copyright-safe courses on MLS platforms like Canvas and Buzz, and automated repetitive tasks with Python scripts.'
        }
        link={'https://www.ensign.edu/'}
      />
    </>
  );
}

export default ProjectCardBlock1;
