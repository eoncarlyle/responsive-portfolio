import '../App.css';
import educationContent from '../content/educationContent.json'

class EducationItem {
	institution: string;
	degree: string;
	dateRange: string;
	summary: string;

	constructor(institution: string, degree: string, dateRange: string, summary: string) {
		this.institution = institution; this.degree = degree; this.dateRange = dateRange; this.summary = summary;
	}
}

function educationItemElement(educationItem: EducationItem) {
	return (
		<div className="resume-item">
			<h3 className="resume-item-title">{educationItem.institution}</h3>
			<h4 className="resume-item-details">{educationItem.degree} &bull; {educationItem.dateRange}</h4>
			<p className="resume-item-copy">{educationItem.summary}</p>
		</div>
	)
}

function educationSection() {
	return educationContent.map(item => (educationItemElement(item)));
}

export default educationSection;