import "../App.css";
import skillsContent from "../content/skillsContent.json"

class SkillsItem {
	title: string;
	copy: string;

	constructor(title: string, copy: string) {
		this.title = title; this.copy = copy;
	}
}

function skillsItemElement(skillsItem: SkillsItem) {
	return (
		<div className="resume-item">
			<h4 className="resume-item-details">{skillsItem.title}</h4>
			<p className="resume-item-copy">{skillsItem.copy}</p>
		</div>
	)
}

function SkillsSection() {
	return <div>
		{skillsContent.map(item => (skillsItemElement(item)))}
	</div>
}

export default SkillsSection;