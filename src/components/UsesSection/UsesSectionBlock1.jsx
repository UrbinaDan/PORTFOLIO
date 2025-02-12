import UsesSection from '/workspaces/PORTFOLIO/src/components/UsesSection/UsesSection.jsx';

const items = [
  {
    groupName: 'Programming Languages',
    items: [
      {
        title: 'Python',
        description:
          'Used for scripting and automating processes in instructional design at BYU and creating GUIs for OAK-D cameras.',
      },
      {
        title: 'JavaScript, HTML, CSS',
        description:
          'Developed interactive web activities and pages for BYUs continuing education courses and Ensign College courses.',
      },
      {
        title: 'MATLAB/SCILAB',
        description:
          'Epecialized knowledge in these for various engineering applications and Math calculations.',
      },
      {
        title: 'LaTex',
        description:
          'For creating well-formatted academic and technical documents or formatting Math formulas in the web.',
      },
    ],
  },
  {
    groupName: '3D Design Software',
    items: [
      {
        title: 'AutoCAD-Inventor',
        description:
          'Used extensively for designing mechanical components and creating 3D models.',
      },
      {
        title: 'Maya',
        description:
          'Used for non-Engineering or mechanical 3D designs',
      },
    ],
  },
  {
    groupName: 'Design',
    items: [
      {
        title: 'Figma',
        description:
          'I use Figma for all of my design work. It’s fast, has great collaboration features, and is highly customizable.',
      },
      {
        title: 'Whimsical',
        description:
          'I use Whimsical for all of my wireframing and flowcharting. It’s fast, has great collaboration features, and is highly customizable.',
      },
    ],
  },
  {
    groupName: 'Other Tools',
    items: [
      {
        title: 'Adobe Illustrator, Microsoft Office',
        description:
          'For creating professional documents and designs.',
      },
    ],
  },
];

function UsesSectionBlock1() {
  return (
    <>
      <UsesSection items={items} />
    </>
  );
}

export default UsesSectionBlock1;
