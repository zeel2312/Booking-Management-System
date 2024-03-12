'use client';
import React, {useEffect, useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function SearchBar(props) {
    const [search, setSearch] = useState('')
    const router = useRouter();
	const autoSuggestions = props.suggestions.map((suggestion) => {
		return <Dropdown.Item key={suggestion + 'SearchDropdownItem'} href='/' tabIndex={0} className="text-light">{suggestion}</Dropdown.Item>
	});
	const [suggestionsShown, setSuggestionsShown] = useState(false);
	const suggestions= <Dropdown show={true} className='w-100'>
		<Dropdown.Menu className='w-100 bg-dark' style={{overflow: 'hidden'}}>
			<p className="fw-light text-light my-0 ms-3 bg-dark" style={{fontSize: '0.8rem'}}>Popular showings...</p>
			{autoSuggestions}
		</Dropdown.Menu>
	</Dropdown>;

	function handleBlur(event) {
		if(event.relatedTarget) {
			event.preventDefault();
		} else {
			setSuggestionsShown(false);
		}
	}

    const onEnter = (event) => {
        console.log(event)
        if (event.keyCode == 13) {
            console.log(search)
            router.push(`/search?showingsSearchBar=` + search)
        }
    }

    const searchInput = (event) => {
        setSearch(event.target.value)
    }

    const clicked = () => {
        console.log(search)
        router.push(`/search?showingsSearchBar=` + search)
    }

    useEffect(() => {
        console.log(search)
    },[])

	return (
		<div className="card-img-overlay d-flex justify-content-center align-items-center" style={{top: '9rem'}}>
			<form id={props.field + 'SearchForm'} className="container-fluid" action='' method=''>
				<div className="form-floating m-auto dropdown" style={{width: '40%'}}>
					<input id={props.field + 'SearchBar'} onChange={searchInput} onKeyDown={(e)=>onEnter(e)} type="text" autoComplete="off" className="form-control form-control-lg bg-white bg-opacity-75 border-0 dropdown-toggle" data-bs-toggle="dropdown" maxLength={128} style={{height: '3.5rem'}} placeholder={props.children} name={props.field + 'SearchBar'} onFocus={() => setSuggestionsShown(true)} onBlur={(event) => handleBlur(event)}/>
					<label htmlFor={props.field + 'SearchBar'}>{props.children}</label>
					<button type="button" className='bg-white' onClick={clicked}>Search</button>
					{suggestionsShown ? suggestions : null}
				</div>
			</form>
		</div>
	);
}