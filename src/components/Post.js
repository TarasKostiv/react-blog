import React, {useState} from 'react';
import ImageModal from "./ImageModal";

const Post = ({title, description, imgPath}) => {
    const [isBlured , setIsBlured] = useState(false)
    const [modalIsOpen , setModalOpen] = useState(false)

    const handleMouse = (value) => setIsBlured(value)

    const handleModal = () => setModalOpen(prev => !prev)

    return (
        // <div className="card bg-dark text-white mb-3">
        //     <img  src={imgPath} className="card-img" alt={title} />
        //     <div style={{background: 'rgba(0, 0, 0, 0.5)'}} className="card-img-overlay">
        //         <h5 className="card-title">{title}</h5>
        //         <p className="card-text">{description}</p>
        //         {/*<p className="card-text">Last updated 3 mins ago</p>*/}
        //     </div>
        // </div>

        // <div className="col" onMouseEnter={() => handleMouse(true)} onMouseLeave={() => handleMouse(false)}>
        //     <div className="card text-white bg-dark  border-secondary">
        //         <img src={imgPath} className="card-img-top" alt={title} />
        //         {isBlured ? (<div className="card-body" style={{height: "150px", overflow: 'hidden'}}>
        //             <h5 className="card-title">{title}</h5>
        //             <p className="card-text" style={{textOverflow: "ellipsis"}}>{description}</p>
        //             {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
        //         </div>) : null}
        //     </div>
        // </div>

        <div className="col" style={{fontFamily: "\'Goblin One\', cursive"}} onClick={handleModal} onMouseEnter={() => handleMouse(true)} onMouseLeave={() => handleMouse(false)}>
            <div className="card text-white bg-dark border-secondary">
                <img src={imgPath} className="card-img-top" style={isBlured ? {filter: 'blur(4px)'} : null}  alt={title} />
                {isBlured ? (
                    <div style={{background: 'rgba(0, 0, 0, 0.5)'}} className="card-img-overlay d-flex justify-content-center align-items-center">
                        <h3 className="card-title">{title}</h3>
                    </div>
                ) : null}
            </div>

            <ImageModal close={handleModal} isOpen={modalIsOpen} description={description} title={title}/>
        </div>

    );
};

export default Post;