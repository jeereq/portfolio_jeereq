const Description = (Array) => {
	return `
				<ul>
					${Array.map((item) => {
						return `<li> <b>${item}</b></li>`;
					})}
				</ul>
			`;
};
export default Description;
