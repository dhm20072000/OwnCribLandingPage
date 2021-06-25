import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const DUMMY_LIST = [
    {id:'1',img:'house1.jpg',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'2',img:'house2.jpg',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'3',img:'house3.jpg',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'4',img:'house4.jpg',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
    {id:'5',img:'house1.jpg',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'6',img:'house2.jpg',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'7',img:'house3.jpg',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'8',img:'house4.jpg',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
    {id:'9',img:'house1.jpg',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'10',img:'house2.jpg',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'11',img:'house3.jpg',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'12',img:'house4.jpg',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
    {id:'13',img:'house1.jpg',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'14',img:'house2.jpg',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'15',img:'house3.jpg',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'16',img:'house4.jpg',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
];

const Listing = () => {
    return (
        <Listings>
            <h2>Available Listings: </h2>
            
            <div className='listing'>
            {DUMMY_LIST.length === 0 && (
                    <div className='spinner-border' role='status'>
                        <span className='sr-only'>Loading...</span>
                    </div>
                )}
                {DUMMY_LIST.length > 0 && DUMMY_LIST.map(item => (
                    <Fade bottom>
                        <Link className='textLink' to={`/listingdetail/${item.id}`}>
                            <div className="out" key={item.id}>
                                <div className="card" key={item.id}>
                                    <img
                                        alt={"users here"}
                                        src={`images/houses/${item.img}`}
                                        
                                    />
                                    <div className="card-body">
                                        <div className='header'>
                                            <h2>${item.price}</h2>
                                            <Link to={`/listingdetail/${item.id}`} className="btn btn-sm follow btn-primary">
                                                Check Out
                                            </Link>
                                        </div>
                                        <div className='body'>
                                            <span>{item.bed} Beds</span><span>{item.bath} Baths</span><span>{item.sqft} Sqft</span>
                                        </div>
                                        <div className='footer'>
                                            <p>{item.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Fade>
                ))}
            </div>
               
        </Listings>
    )
}

const Listings = styled.div`
    margin: 0 auto;
    width: 98%;
    min-height: 600px;
    margin-top: 20px;
    margin-bottom: 0;

    .textLink{
        text-decoration: none;
    }

    .listing{
        margin-left: 15px;
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-row-gap: 20px;
        grid-column-gap: 5px;
    }

    .card{
        opacity: 1;
        width: 290px;

        &:hover{
            transform: scale(1.02);
            cursor: pointer;
            transition: 0.6s;
        }
    }

    .card-body{
        height: 125px;
        color: black;
    }

    .card-body .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card-body .body{
        text-align: left;
        margin-top: 5px;

        & span{
            margin-right: 10px;
            border-right: 1px solid black;
            padding-right: 5px;
        }

    }

    .card-body .footer{
        text-align: left;
        margin-top: 10px;
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }

    img {
        display:block;
        width: 100%;
        height: 250px;
    }

    .slick-prev:before, .slick-next:before {
        color: black !important;
    }

    .follow{
        background-color: #3897f0 !important;
        border: 1px solid #3897f0 !important;
        border-radius: 4px;
        color: #fff;
        margin-bottom: 10px;
    }

`;

export default Listing;
