import './Section4.css'
import Header4 from './Header/Header4';

function Section4() {
  const projects = [
    { name: 'Project 1', description: 'Description of project.' },
    { name: 'Project 2', description: 'Description of project.' },
  ]

  // return (
  //   <section id="projects" className="section-projects">
  //     <div className="section-header">
  //       <h2>Projects</h2>
  //     </div>
  //     <div className="section-content">
  //       {projects.map((project, i) => (
  //         <div key={i} className="project-card">
  //           <h3>{project.name}</h3>
  //           <p>{project.description}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // )
  return (
    <section id="projects" className="section-projects">
      <Header4
        title="Projects Section"
        subtitle="Explore our latest projects and initiatives."
      />
      <div className="section-content">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section4
