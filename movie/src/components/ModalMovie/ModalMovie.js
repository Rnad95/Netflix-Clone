import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
function ModalMovie(movieInfo, show, handleClose) {
    return (

        <>
            <h2>Welcome to Our Page</h2>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add to Your Favorite</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h3>{movieInfo.title}</h3>
                        <img alt="" src={movieInfo.image} />

                        <input ref={movieInfo.poster_path} type="text" placeholder="Write Your Comment" />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary">Added to Favorite</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default ModalMovie;