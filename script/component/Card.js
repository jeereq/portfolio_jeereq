const Card = ({ href, title, src, alt, title_card, resume }) => {
	return `<div class="block">
				<a
					href="${href}"
					title="${title}"
					target="_blank"
				>
                    <img
                        src="${src}"
                        alt="${alt}"
                    />
				</a>
				<div class="block-right">
					<h1>${title_card}</h1>
					<p>
						${resume}
					</p>
        		</div>
			</div>`;
};
export default Card;
