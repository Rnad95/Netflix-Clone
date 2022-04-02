import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function UpdateModal({ show, handleClose, ele, getFavMovies,
    titleInput,
    setTitleInput,
    imageInput,
    setImageInput,
    commentInput,
    setCommentInput
}) {


    const update = async (id) => {

        let updated = { media_type: ele.media_type, adult: ele.adult, backdrop_path: ele.backdrop_path, genre_ids: ele.genre_ids, original_language: ele.original_language, original_title: titleInput, overview: ele.overview, poster_path: imageInput, comment: commentInput }


        await axios.put(`https://movie-renad.herokuapp.com/update/${id}`, updated)
            .then(() => {
                getFavMovies();
            }).catch(err => {
                console.log(err);
            })
    }


    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                        <p>Edite Title</p>
                        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
                        <p style={{ "marginTop": "10px" }}>Edit Image</p>
                        <textarea value={imageInput} onChange={(e) => setImageInput(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="op">Write Your Opinion</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Comment" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={() => {
                            update(ele.id);
                            handleClose();
                        }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateModal;
