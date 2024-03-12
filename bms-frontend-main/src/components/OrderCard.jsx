'use client';
import {useState} from 'react';
import {Col, Row} from 'react-bootstrap';

export default function OrderCard({title, showingLocation, date, time, cost, linkToMovieImg}) {
	return (
		<Row className="p-4">
			<Col className={"float-end p-0 m-0 col-12 col-lg-3 mb-4"} style={{maxHeight: '10rem'}}>
				<img src={linkToMovieImg} className="img m-auto" style={{maxHeight: '10rem'}}/>
			</Col>
			<Col className="col-12 col-lg-9 p-0 m-0 text-center">
				<div className="d-inline align-middle">
					<h5 className="text-center">{title}</h5>
					<p className="p-0 m-0 fw-bold">{showingLocation}</p>
					<p className="p-0 m-0 fw-bold">{'$' + cost} - Paid</p>
					<p className="p-0 m-0">{date}</p>
					<p className="p-0 m-0">{time}</p>
				</div>
			</Col>
		</Row>
	);
}