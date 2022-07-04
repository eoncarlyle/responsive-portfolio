import "./App.css";
import HeaderSection from "./sections/HeaderSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";
import RecognitionSection from "./sections/RecognitionSection"

export function contentSectionElement(
  title: string,
  body: JSX.Element,
) {
  return (
    <div className="content-section">
      <header className="section-header">
        <h2>{title}</h2>
      </header>
      {body}
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <HeaderSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <RecognitionSection />
      <FooterSection />
    </div>
  );
}

export default App;
