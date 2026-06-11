import "./FooterSection.css";

const FooterSection = () => {
  const students = [
    {
      name: "Abdulsalam",
      github: "",
    },
    {
      name: "Esther",
      github: "",
    },
    {
      name: "Richard",
      github: "",
    },
    {
      name: "Silver",
      github: "",
    },
    {
      name: "Abayomi",
      github: "",
    },
    {
      name: "Tosin",
      github: "",
    },
  ];

  return (
    <>
      <footer className="footer-section">
        <div>
          <h4 className="heading">About</h4>

          <p className="heading-description">
            The group members who worked on this project are:
          </p>

          <nav className="students-nav">
            <ul className="student-links">
                {
                    students.map(({name, github}, index) => (
                        <li className="student-link" key={index}><a href={github}>{name}</a></li>
                    ))
                }
            </ul>
          </nav>

          <hr className="line" />
          <div>
            <p className="about-info">
              &#169; 2026 Designed by{" "}
              <a href="https://amakandukwu.com/">Amaka </a> &{" "}
              <a href="https://www.linkedin.com/in/ifeomaokocha">Ifeoma A.</a>
            </p>
          </div>
          <div className="container">
            <div>
              <span>Built by Phoenix Group 26.</span>
              <span id="copyright">All rights reserved</span>
            </div>
            <div>
              <a href="https://tsacademyonline.com/" className="ts-link">
                TSAcademy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
