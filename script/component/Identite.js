const Identite = ({ name, email }) => {
	return `
				<h1>
	    			hell<span>o</span>,<br />
					i'am <span>${name}</span>
				</h1>
				<button>
					<a href="${email}">Hire me!</a>
				</button>
    		`;
};

export default Identite;
