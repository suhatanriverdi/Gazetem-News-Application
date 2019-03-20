import React from 'react';
import './Categories.css';

class Categories extends React.Component {
	render() {
		const categories = ['SON DAKİKA','GÜNDEM', 'EKONOMİ', 'SAĞLIK', 'MAGAZİN', 'SPOR', 'TEKNOLOJİ'];
		const navLinks = categories.map((page, i) => {
			return (
				<a className="category" key={i} href={'/' + page}>
					{page}
				</a>
			)
		});
		return (
			<nav>{navLinks}</nav>
		);
	  }
}

export default Categories;