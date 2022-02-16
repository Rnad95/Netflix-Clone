import Movie from '../Movie/Movie'
import { Button, Card } from 'react-bootstrap';
import { Container, Row } from "react-bootstrap"
// import Modalo from '../ModalMovie/ModalMovie';
import { useState } from 'react'
import Modalo from '../ModalMovie/ModalMovie';
function MovieList({ data }) {


    const [movieInfo, setMovieInfo] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    // console.log(data)
    return (

        <>
            {/* mapping the data with the back-end */}
            <Container className='div-container'>
                <Row md={3}>
                    {
                        // data.length && data.map((ele, idx) => (
                        <div className="div2" >
                            <Movie data={data} />
                        </div>

                        // ))
                    }


                </Row>

            </Container>
            {
                <Modalo movieInfo={movieInfo} show={show} handleClose={handleClose} />
            }
            {
                !data.length && <div><h3>Page Not found, please try later  </h3></div>

            }

        </>


    )
}

export default MovieList;