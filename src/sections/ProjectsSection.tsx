import '../App.css';
import projectsContent from '../content/projectsContent.json'

class ProjectsItem {
	name: string;
	position: string;
	dateRange: string;
	copy: string;
	
	constructor(name: string, position: string, dateRange: string, copy: string) {
		this.name = name; this.position = position; this.dateRange = dateRange; this.copy = copy;
	}
}

function projectsItemElement(projectsItem: ProjectsItem) {
	return (
		<div className="resume-item">
			<h3 className="resume-item-title">{projectsItem.name}</h3>
			<h4 className="resume-item-details">{projectsItem.position} &bull; {projectsItem.dateRange}</h4>
			<p className="resume-item-copy">{projectsItem.copy}</p>
		</div>
	)
}

function projectsSection() {
	return projectsContent.map(item => (projectsItemElement(item)));
}

export default projectsSection;