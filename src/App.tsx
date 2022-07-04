import "./App.css";
import HeaderSection from "./sections/HeaderSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection from "./sections/EducationSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";
import RecognitionSection from "./sections/RecognitionSection"

const contentSections: [string, JSX.Element][] = [
  ["Experience", <ExperienceSection/>],
  ["Education", <EducationSection/>],
  ["Skills", <SkillsSection/>],
  ["Projects", <ProjectsSection/>],
  ["Recognition", <RecognitionSection/>]
]

function contentSectionElement(
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
      {<HeaderSection />}
      {contentSections.map(
        section => (
          contentSectionElement(section[0], section[1])
        )
      )}
      {<FooterSection />}
    </div>
  );
}

export default App;
