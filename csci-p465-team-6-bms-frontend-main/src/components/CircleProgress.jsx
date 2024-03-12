'use client';
import {useState} from 'react';

export default function CircleProgress({bgColor, percentage}) {
	return (
		<div className={"d-block m-auto progress " + bgColor}>
			<span className="progress-left">
			   <span className="progress-bar"></span>
			</span>
			<span className="progress-right">
			   <span className="progress-bar"></span>
			</span>
			<div className="progress-value fw-bold">{percentage + "%"}</div>
		</div>
	);
}