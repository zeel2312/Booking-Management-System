'use client';

import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation'

export interface showingsSearchBar {
    searchParams: {
        showingsSearchBar: string,
    }
}

interface SearchAllApiResponse {
    movie_matches: string[],
    theatre_matches: string[],
}

export default function Page({searchParams}: showingsSearchBar) {
    console.log(searchParams);

      const searchAPI = 'http://127.0.0.1:8000/search_all?searchTerm=' + searchParams?.showingsSearchBar;

      const getSearchDetails = async () => {
        const response = await fetch(searchAPI, {method: 'get'})
        const data: SearchAllApiResponse = await response.json();
        console.log(data);
      }

    useEffect(() => {
        getSearchDetails();
    },[])

    return (
        <>
        <main className='p-3 h-100'>
            This page works.
        </main>
        </>
    );
}
