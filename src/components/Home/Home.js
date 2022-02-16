
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList'
import axios from 'axios';
// import { Button, Card } from 'react-bootstrap';
import './Home.css';

function Home() {

    const [data, setData] = useState([]);

    const getAllMovies = async () => {
        return await axios.get(`https://movie-renad.herokuapp.com/getMovies`)

            .then(result => {
                return result.data;
            }).catch((err) => {

                console.log(err)
            })
    }

    useEffect(() => {
        void (async () => {
            let data = await getAllMovies();
            setData(data);
        })();
    }, [])

    return (
        <>

            <MovieList data={data} />
        </>
    );
}

export default Home;