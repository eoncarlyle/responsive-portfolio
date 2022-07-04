import "../App.css";
import recogitionContent from "../content/recognitionContent.json"
import { contentSectionElement } from "../App"

class RecognitionItem {
	name: string;
	institution: string;
	dateRange: string;
	copy: string;

	constructor(name: string, institution: string, dateRange: string, copy: string) {
		this.name = name; this.institution = institution; this.dateRange = dateRange; this.copy = copy;
	}
}

function recognitionItemElement(recognitionItem: RecognitionItem) {
	return (
		<div className="resume-item">
			<h3 className="resume-item-title">{recognitionItem.name}</h3>
			<h4 className="resume-item-details">{recognitionItem.institution} &bull; {recognitionItem.dateRange}</h4>
			<p className="resume-item-copy">{recognitionItem.copy}</p>
		</div>
	)
}

function recognitionSection() {
	return contentSectionElement("Recognition", <div>
		{recogitionContent.map(item => (recognitionItemElement(item)))}
	</div>);
}

export default recognitionSection; 