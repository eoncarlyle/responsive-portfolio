import "../App.css";
import experienceContent from '../content/experienceContent.json';
import { contentSectionElement } from "../App"

class ExperienceItem {
	employer: string;
	position: string;
	dateRange: string;
	summary: string;
	bullets: string[];

	constructor(employer: string, position: string, dateRange: string, summary: string, bullets: string[]) {
		this.employer = employer; this.position = position; this.dateRange = dateRange;
		this.summary = summary; this.bullets = bullets;
	}
}

function exerienceItemElement(experienceItem: ExperienceItem) {
	return (
		<div className="resume-item">
			<h3 className="resume-item-title">{experienceItem.position}</h3>
			<h4 className="resume-item-details">{experienceItem.employer} &bull; {experienceItem.dateRange}</h4>
			<p className="resume-item-copy">{experienceItem.summary}</p>
			<ul className="resume-item-copy">
				{experienceItem.bullets.map(bullet => (
					<li>{bullet}</li>
				))}
			</ul>
		</div>
	)
}

function ExperienceSection() {
	return contentSectionElement("Experience", <div>
		{experienceContent.map(item => (exerienceItemElement(item)))}
	</div>)
}

export default ExperienceSection;