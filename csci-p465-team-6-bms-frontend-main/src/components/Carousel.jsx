'use client';

export default function Carousel(props) {
	const carouselItems = props.children.map((item) => {
		return 1;
	});

	return (
		<div className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				{props.children}
			</div>
		</div>
	);
}