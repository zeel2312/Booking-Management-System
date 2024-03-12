'use client';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';

export default function ShowingCard({title, showingLocation, date, time, runtime, linkToBuy, linkToMovieImg, orientationRight = true}) {
	const imageCol= <Col className={"float-" + (orientationRight ? 'end ps-1 mt-3 mt-lg-0' : 'start pe-1') + " p-0 m-0 col-12 col-lg-4 mb-4"} style={{maxHeight: '10rem'}}><img src={linkToMovieImg} className="img m-auto" style={{maxHeight: '10rem'}}></img></Col>;
	return (
		<Row className="p-4">
			{(orientationRight ? null : imageCol)}
			<Col className="col-12 col-lg-8 p-0 m-0 text-center">
				<div className="d-inline align-middle">
					<h5 className="text-center">{title}</h5>
					<p className="p-0 m-0">{showingLocation}</p>
					<p className="p-0 m-0">{date}</p>
					<p className="p-0 m-0">{time}</p>
					<p className="p-0 m-0">{runtime}</p>
					<a href={linkToBuy} className="p-0 m-0 golden">Buy Ticket</a>
				</div>
			</Col>
			{(orientationRight ? imageCol : null)}
		</Row>
	);
}