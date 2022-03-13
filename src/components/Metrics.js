import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard';

const Metrics = () => {
	const [movies, setmovies] = useState([]);
	const [genres, setgenres] = useState([]);
	const [actors, setactors] = useState([]);
		
	
	useEffect(() => {   
		fetch('api/metrics')
		.then(response => response.json())
		.then(movies => {
			setmovies(movies)
		})
	},[])

	useEffect(() => {   
		fetch('api/metrics')
		.then(response => response.json())
		.then(genres => {
			setgenres(genres)
		})
	},[])

	useEffect(() => {   
		fetch('api/metrics')
		.then(response => response.json())
		.then(actors => {
			setactors(actors)
		})
	},[])
		
	const cardProps  = [movies,genres,actors]
	
	
	return (
		<div className="row">
			
			
				{cardProps.map((movie,i) => (
					 <SmallCard {...movie} key={i} />
				)
					)}
			   
	
			</div>
		)
	}
	
	
	
	
	export default Metrics;