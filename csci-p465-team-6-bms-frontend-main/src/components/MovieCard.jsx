'use client';
import {useState} from 'react';

export default function MovieCard({children, className, imgSrc, title}) {
	return (
		<div className={"col-6 col-md-4 col-lg-3 mb-4" + ' ' + className}>
			<a href="" style={{color: "black", textDecoration: "none"}}>
				<div className="card">
					<img src={imgSrc} className="card-img-top" alt={title + ' Poster'} draggable="false"/>
					<div className="card-body" style={{width: '100%'}}>
						<h5 className="card-title" style={{WebkitLineClamp: '1', 'display': '-webkit-box',  WebkitBoxOrient: 'vertical', 'overflow': 'hidden'}}>{title}</h5>
						<p className="card-text" style={{WebkitLineClamp: '3', 'display': '-webkit-box',  WebkitBoxOrient: 'vertical', 'overflow': 'hidden'}}>{children}</p>
					</div>
				</div>
			</a>
		</div>
	);
}