import ArticleCard from './ArticleCard'; // Adjust the path based on your structure

function ArticlesSection() {
  const articles = [
    {
      date: 'August 2023 – April 2024',
      title: 'Math Instructional Design Assistant',
      content: 'Developed interactive activities and web pages using Javascript, CSS, and HTML for the continuing education at BYU. Also, Automated processes and repetitive tasks with Python scripts, enhancing efficiency (e.g., Python scrapers to check for broken links across an entire course or Python scripts to update the HTML and CSS code for a whole course, which could consist of up to 250 webpages each course).',
      link: '#',
    },
    {
      date: 'Sept 2022 – Dic 2022',
      title: 'Software Developer (Python)',
      content: 'Developed a GUI that interacts with OAK-D cameras (Stream, record, pause and save videos) for AI applications, connecting with the OAK-D API.',
      link: '#',
    },
    {
      date: 'Jan 2019 – Sept 2022',
      title: 'Academic Tutor',
      content: 'Math, physics, chemistry, and Engineering (Mechanical and Software Engineering) tutored for school or university students.',
      link: '#',
    },
  ];

  return (
    <section>
      <ul>
        {articles.map((article, index) => (
          <li key={index} className="flex flex-col space-y-2 py-6">
            <ArticleCard
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ArticlesSection;
