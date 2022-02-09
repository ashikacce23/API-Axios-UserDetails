

import React from 'react';
import "./Card.css"

const Card = ({detailsData}) => {
    return (
        <div>
            <div className="card" style={{width:"18rem"}}>
              <img className='custom-img card-img-top border-danger' 
              src={detailsData.picture?.large} alt='userImg'/>

                <div className="card-body">
                     <h1 className="card-text"> {detailsData.name?.first} </h1>
                     <h3> {detailsData.gender} </h3>
                     <h3> {detailsData.phone} </h3>
                    <h4> {detailsData.location?.state} </h4>
                </div>
                <div className="card-footer">
                    <p> {detailsData.email} </p>
                    <p className="btn btn-primary text-light">
                        {detailsData.dob?.age}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;