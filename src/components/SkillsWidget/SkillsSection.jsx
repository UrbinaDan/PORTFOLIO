import SkillsWidget from './SkillsWidget.jsx';

const skills = [
  { name: 'HTML', proficiency: 90, icon: 'images/html.png' },
  { name: 'CSS', proficiency: 60, icon: 'images/CSS.png' },
  { name: 'JavaScript', proficiency: 75, icon: 'images/JS.png' },
  { name: 'MatLab', proficiency: 90, icon: 'images/MatLab.png' },
  { name: 'Python', proficiency: 90, icon: 'images/Python.png' },  
  { name: 'Adobe Illustrator', proficiency: 84, icon: 'images/Illustrator.png' },
  { name: 'Adobe PhotoShop', proficiency: 50, icon: 'images/PhotoShop.png' },
  { name: 'Autodesk Inventor (and other 3D modeling Software)', proficiency: 93, icon: 'images/Inventor.png' },
];

function SkillsSection() {
  return (
    <>
      <SkillsWidget
        title={'Skills'}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.'}
        skills={skills}
      />
    </>
  );
}

export default SkillsSection;
