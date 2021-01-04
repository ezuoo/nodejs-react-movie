import React, {useEffect, useState } from 'react'
import {API_KEY, API_URL, IMAGE_BASE_URL} from '../../Config';
import MainImage from '../Common/MainImage';
import GridCards from "../Common/GridCards";
import {Row, Button} from 'antd';

function LandingPage() {
    const [Movies, setMovies] = useState([]);
    const [MainMovieImage, setMainMovieImage] = useState(null);
    const [CurrentPage, setCurrentPage] = useState(0);

    const fetchMovie = (endPoint) => {
        fetch(endPoint)
            .then(response => response.json())
            .then(response => {
                setMovies([...Movies, ...response.results]);
                MainMovieImage === null ? setMainMovieImage(response.results[0]) : setMainMovieImage(MainMovieImage);
                setCurrentPage(response.page);
            });
    }

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetchMovie(endPoint);

    }, []);

    const onClickLoadHandler = () => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
        fetchMovie(endPoint);
    }

    return (
        <>
            <div style={{width:'100%', margin:'0'}}>   
                {MainMovieImage &&
                    <MainImage image={`${IMAGE_BASE_URL}w1280/${MainMovieImage.backdrop_path}`} 
                    title={MainMovieImage.original_title} overview={MainMovieImage.overview}/>
                }
            </div>
            <br />    
            <div style={{width: '76%', margin: '1rem auto'}}>
                <h2>Movie by latest</h2>
                <hr />
                <br />
            
                <Row gutter={[16, 16]}>
                    {Movies && Movies.map((movie, index) => (
                        <React.Fragment key={index}>
                            <GridCards
                                landingPage={true}
                                image={movie.poster_path ? `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                movieId={movie.id}
                                movieName={movie.original_title} />
                        </React.Fragment>
                    ))}
                </Row>
            
            </div>
            <br />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button onClick={onClickLoadHandler}>Load More</Button>
            </div>
        </>
    )
}

export default React.memo(LandingPage)
