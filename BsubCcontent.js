import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Link } from 'react-router-dom';
import './BsubCcontent.css';

function BsubCcontent({ Titles, Image, Next, link, Models=[] }) {
  return (
 
      <div className="card-container">
        <div className="row no-gutters">
          <div className="col-md-4 B-container">
            <img src={require(`./${Image}`)} alt={Titles} />
          </div>
          <div className="col-md-8 B-container">
            <h5 className="card-title">{Titles}</h5>
            <p>description goes here</p>
            <div className="btn-group dropright">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Car Models
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">{Models[0]}</button>
                <button className="dropdown-item" type="button">{Models[1]}</button>
                <button className="dropdown-item" type="button">{Models[2]}</button>
              </div>
            </div>
            <Link to={link} className="btn btn-primary">{Next}</Link>
          </div>
        </div>
      </div>
  
  );
}

export default BsubCcontent;