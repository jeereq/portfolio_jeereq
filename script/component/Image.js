const Image = ({ image_src, image_alt }) => {
	return `<div class="span">
				<img src="${image_src}" alt="${image_alt}" />
			</div>`;
};

export default Image;
