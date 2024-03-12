export default function CarouselItem(props) {
	return (
		<div className={'carousel-item' + (props.active ? ' active' : '')}>
			<div className='row'>
				{props.children}
			</div>
		</div>
	)
}