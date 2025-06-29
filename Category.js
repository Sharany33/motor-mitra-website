import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import funnel from './funnel.png';
import sparkPlug from './sparkPlug.png';
import chain from './chain.png';
import airFilter from './airFilter.png';
import './Category.css';
import { Link } from 'react-router-dom';




function Category() {
    return (
        <div>



            <div className="card-group " style={{ margin: "20px", gap: "5px" }}>
                <Link to="/subcat" className="card " style={{ margin: "20px" }}>
                    <img src={funnel} className="gif" alt='category1' />
                    <div className="card-body ">
                        <div className="card-text text-center1" style={{fontFamily: 'Roboto', fontSize: '25px',marginTop:'15px'}}>Lubrication & Fluids</div>
                    </div>
                </Link>
                <Link to="/subcat2" className="card " style={{ margin: "20px" }}>
                    <img src={airFilter} className="gif4" alt='category4' />
                    <div className="card-body ">
                        <div
                           className="card-text text-center1" style={{fontFamily: 'Roboto', fontSize: '24px',marginTop:'16px'}}>Fliter & Maintenance</div>
                    </div>
                </Link>
                <Link to="/subcat3" className="card " style={{ margin: "20px" }}>
                    <img src={chain} className="gif3" alt='category3' />
                    <div className="card-body ">
                            <h2 className="card-text text-center1" style={{fontFamily: 'Roboto', fontSize: '27px',marginTop:'17px'}}>timing & Belts</h2>
                    </div>
                </Link>
                <Link to="/subcat4" className="card " style={{ margin: "20px" }}>
                    <img src={sparkPlug} className="gif2" alt='category2' />
                    <div className="card-body ">
                            <h2 className="card-text text-center1" style={{fontFamily: 'Roboto', fontSize: '23px',marginTop:'19px'}}>Ignition Components</h2>
                    </div>
                </Link>
            </div>

        </div>
    );
}

export default Category;
