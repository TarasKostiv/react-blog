import React from 'react';

const Post = ({title, description, imgPath}) => {
    return (
        // <div className="card bg-dark text-white mb-3">
        //     <img  src={imgPath} className="card-img" alt={title} />
        //     <div style={{background: 'rgba(0, 0, 0, 0.5)'}} className="card-img-overlay">
        //         <h5 className="card-title">{title}</h5>
        //         <p className="card-text">{description}</p>
        //         {/*<p className="card-text">Last updated 3 mins ago</p>*/}
        //     </div>
        // </div>

        <div className="col">
            <div className="card text-white bg-dark  border-secondary">
                <img src={imgPath} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
                </div>
            </div>
        </div>


        //
        // <div className="card mb-3">
        //     <img  src={imgPath} className="card-img" alt={title} />
        //         <div className="card-body">
        //             <h5 className="card-title">{title}</h5>
        //             <p className="card-text">{description}</p>
        //             {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
        //         </div>
        // </div>
        //
        // <div className="card mb-3" style="max-width: 540px;">
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //             <img  src={imgPath} alt={title} />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title">{title}</h5>
        //                 <p className="card-text">{description}</p>
        //                 {/*<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>*/}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Post;