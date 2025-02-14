const Experience = () => {
    const jobs = [
      {
        company: "IBM",
        position: "Desarrollador Backend (Full-time)",
        period: "Octubre 2022 - Presente",
        description:
          "Desarrollo y mantenimiento de microservicios utilizando Java y Spring.",
        logo: "/ibm-logo.png",
      },
      {
        company: "Graviton",
        position: "Desarrollador Backend (Freelancer)",
        period: "Junio 2024 - Presente",
        description:
          "Desarrollo de aplicaciones en C# que controlan servicios de un edificio corporativo.",
        logo: "/graviton-logo.png",
      },
    ];
  
    return (
        <section id="experiencia" className="container my-5">
          <h1 className="text-center fw-bold mb-4">Experiencia Laboral</h1>
          <div className="row justify-content-center">
            {jobs.map((job, index) => (
              <div key={index} className="col-md-8 mb-4">
                <div className="card shadow border-0 p-3 d-flex flex-row align-items-center">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="me-3"
                    style={{ width: "180px", height: "80px", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="fw-bold">{job.company}</h4>
                    <h5 className="text-primary">{job.position}</h5>
                    <p className="text-muted">{job.period}</p>
                    <p>{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
  };
  
  export default Experience;
  