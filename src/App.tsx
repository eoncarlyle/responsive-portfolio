import React from 'react';
import './App.css';
import headerSection from './sections/HeaderSection';
import experienceSection from './sections/ExperienceSection';
import educationSection from './sections/EducationSection';
import skillsSection from './sections/SkillsSection';
import projectsSection from './sections/ProjectsSection';
import footerSection from './sections/FooterSection';
import recognitionSection from './sections/RecognitionSection'

class ContentSection {
  title: String;
  body: JSX.Element | JSX.Element[];

  constructor(title: String, body: JSX.Element | JSX.Element[]) {
    this.title = title; this.body = body;
  }
}

const contentSections = [
  new ContentSection("Experience", experienceSection()), 
  new ContentSection("Education", educationSection()),
  new ContentSection("Skills", skillsSection()),
  new ContentSection("Projects", projectsSection()),
  new ContentSection("Recognition", recognitionSection())
]

function contentSectionElement(title: String, body: JSX.Element| JSX.Element[]) {
  return (
    <div className='content-section'>
      <header className="section-header">
        <h2>{title}</h2>
      </header>
      {body}
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      {headerSection()}
      {contentSections.map(
        section => (
          contentSectionElement(section.title, section.body)
        )
      )}
      {footerSection()}
    </div>
  );
}

export default App;
