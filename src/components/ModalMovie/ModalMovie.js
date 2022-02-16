import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useRef } from 'react'
import axios from 'axios';



function Modalo({ movieInfo, show, handleClose }) {
    const commentInputRef = useRef("");

    console.log(movieInfo)
    const addToFav = async () => {
        let comment = commentInputRef.current.value;
        // media_type,adult, backdrop_path,genre_ids, original_language, original_title,overview,poster_path
        let itemFav = { media_type: movieInfo.media_type, adult: movieInfo.adult, backdrop_path: movieInfo.backdrop_path, genre_ids: movieInfo.genre_ids, original_language: movieInfo.original_language, original_title: movieInfo.original_language, overview: movieInfo.overview, poster_path: movieInfo.poster_path, comment: comment }


        await axios.post(`https://movie-renad.herokuapp.com/addMovie`, itemFav)
            .then(() => {
                console.log("The movie Saved to Favorite Page :) ")
            }).catch((err) => {
                console.log(err)
            })
    }


    return (

        <>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{movieInfo.title}</h3>
                    <img alt="" src={movieInfo.backdrop_path} />
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <input ref={commentInputRef} placeholder="Write Your Opinion" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary"
                        onClick={() => {
                            handleClose()
                        }}> Close</Button> */}
                    <Button variant="primary"
                        onClick={() => {
                            addToFav();
                            handleClose();
                        }}

                    > Add To Favorite </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Modalo;