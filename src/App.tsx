// import React from "react";
import "./App.css";
import HeaderSection from "./sections/HeaderSection";
//this is a lot of importing, check out how other code bases group there exports
//the goal would be to have a line that looks like:
// import {experienceSection,educationSection,skillsSection, etc} from "./sections/index.tsx"
import experienceSection from "./sections/ExperienceSection";
import educationSection from "./sections/EducationSection";
import skillsSection from "./sections/SkillsSection";
import projectsSection from "./sections/ProjectsSection";
import FooterSection from "./sections/FooterSection";
import recognitionSection from "./sections/RecognitionSection";

//! This class doesnt really do anything. It takes constructor args and returns set fields
//! More or less equivalent to (x,y)=>{return {x,y}} and practically equivalent to x => x

// class ContentSection {
//   title: String;
//   body: JSX.Element | JSX.Element[];

//   constructor(title: String, body: JSX.Element | JSX.Element[]) {
//     this.title = title; this.body = body;
//   }
// }

//Turned to an array as a quick rewrite, maybe better as an object
//using `x-section()` to return JSX is probably a data flow code smell here, esp since you have this data in a json already?
const contentSections = [
  ["Experience", experienceSection()],
  ["Education", educationSection()],
  ["Skills", skillsSection()],
  ["Projects", projectsSection()],
  ["Recognition", recognitionSection()],
];

function contentSectionElement(
  title: JSX.Element | JSX.Element[] | string, // my code is WRONG typing (prev was correct), but did it so TS wouldnt yell at me about the mixed typed array
  body: JSX.Element | JSX.Element[] | string // my code is WRONG typing (prev was correct), but did it so TS wouldnt yell at me about the mixed typed array
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
      {/* Dont forget about Components!!! */}
      <HeaderSection />

      {contentSections.map((section) => {
        console.log(section[1]);
        return contentSectionElement(section[0], section[1]); //should refactor to component that takes props
      })}

      {/* Dont forget about Components!!! */}
      <FooterSection />
    </div>
  );
}

export default App;
