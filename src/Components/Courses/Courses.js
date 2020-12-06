import React from 'react';
import './Courses.css'
const Courses = (props) => {
    
    const {title,image,price}=props.products
    return (
        <div className=' design row'>
                <div className="course">
                    <div className="inner">
                    <img style={{height:'50px',width:'70px'}} src={image} alt=""/>
                    <h5>{title}</h5>
                    
                    <h5>Price: ${price}</h5>
                    <button className='enroll'
                    onClick={()=>props.handleAddProduct(props.products)}>Enroll Now</button>
                    </div>
                </div>
                
            </div>
    );
};

export default Courses;