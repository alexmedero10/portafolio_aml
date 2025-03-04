import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"

const AboutMe = () => {
    return (
      <section id="sobremi" className="container my-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="/FotoPerfil.jpeg"
              alt="Foto de perfil"
              className="img-fluid rounded-circle border border-primary shadow"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Alejandro Medero Luján</h2>
            <p className="text-muted fs-5">
              Soy un desarrollador backend especializado en <strong>Java</strong> e <strong>Inteligencia Artificial</strong>. 
              Me apasiona crear soluciones innovadoras utilizando inteligencia artificial y optimización de algoritmos.
            </p>
            <div className="d-flex gap-2 mt-2">
                <a className="tech-icon" href="https://github.com/alexmedero10" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub />
                </a>
                <a className="tech-icon" href="https://www.linkedin.com/in/alejandromederolujan/" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin />
                </a>
                <a className="align-self-end" href="/CV_MederoLujanAlejandro.pdf" download="CV_MederoLujanAlejandro.pdf">
                    <button className="button-cv">Descargar CV</button>
                </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  