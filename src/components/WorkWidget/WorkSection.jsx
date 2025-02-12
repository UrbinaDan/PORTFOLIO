import WorkWidget from './WorkWidget.jsx';

function WorkSection() {
  return (
    <>
      <WorkWidget
        title={'Work'}
        content={'My work experience.'}
        experiences={[
          {
            logo: 'images/Ensign.png',
            organization: 'Ensign',
            jobTitle: 'Instructional Design Assistant',
            startYear: 2024,
            endYear: null,
          },
          {
            logo: 'images/BYU.png',
            organization: 'BYU',
            jobTitle: 'Math Instructional Design Assistant',
            startYear: 2023,
            endYear: 2024,
          },
          {
            logo: 'images/Asfaltics.png',
            organization: 'Asfaltics',
            jobTitle: 'Software Engineer',
            startYear: 2022,
            endYear: 2022,
          },
          {
            logo: 'images/UNAL.png',
            organization: 'National University of Colombia',
            jobTitle: 'Academic Tutor',
            startYear: 2019,
            endYear: 2022,
          },
        ]}
      />
    </>
  );
}

export default WorkSection;
