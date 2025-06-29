import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
function Ccontent({ title, img, next, Link }) {
  return (
    <div className="card p-2" style={{ width: '16rem' }}>
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href={Link} className="btn btn-primary">{next}</a>
      </div>
    </div>
  );
}
export default Ccontent;