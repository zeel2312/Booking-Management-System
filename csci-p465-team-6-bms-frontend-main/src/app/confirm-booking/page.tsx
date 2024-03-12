'use client';

import React, { useEffect, useState } from 'react';
import ViewTicket from '@/components/ViewTicket';
import { useRouter } from 'next/navigation'

export interface ConfirmBookingProps {
    searchParams: {
        bookingId: number,
        email: string
    }
}

export default function Page({searchParams}: ConfirmBookingProps) {

	const searchAllAPI = 'http://127.0.0.1:8000/search_all';

	const handleSearch = async ( event ) => {
	    const term = event.target.value;
		console.log(term);
		const response = await fetch(searchAllAPI + '/?searchTerm=' + term, {method: 'get'});
		let data = await response.json();
		console.log(data);
        data.forEach(element => {
            let searchAllPayload = {
                showId: element.showing_id,
                screenId: element.screen_id,
                startTime: element.start_time,
                endTime: element.end_time,
                totalSeats: element.total_seats,
                screenName: element.screen_name
            };
        });
	}



    return (
        <>
        <main className='p-3 h-100'>
            <ViewTicket searchParams={searchParams}/>
        </main>
        </>
    );
}
