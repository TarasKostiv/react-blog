import React from 'react';
import Popup from "reactjs-popup";


const ImageModal = ({isOpen, description, title, close}) => {
    const style = {
        wrapper: {
            height: '100vh',
            width: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'rgba(0,0,0,0.5)',
        }
    }

    return (
        <Popup onClose={close} open={isOpen} className={'image-modal'} overlayStyle={style.wrapper} lockScroll>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{title}</h5>
                            {/*<button onClick={} type="button" className="btn-close" data-bs-dismiss="modal"*/}
                            {/*        aria-label="Close"></button>*/}
                        </div>
                        <div className="modal-body">
                            <p>{description}</p>
                        </div>
                        {/*<div className="modal-footer">*/}
                        {/*    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                        {/*</div>*/}
                    </div>
                </div>
        </Popup>
    );
};

export default ImageModal;