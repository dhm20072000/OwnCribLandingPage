import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";


const DUMMY_LIST = [
  {id:'1',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',lat:36.882240,lng:-76.282490,price:'550000'},
  {id:'2',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',lat:36.865100,lng:-76.299960,price:'329000'},
  {id:'3',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',lat:36.876660,lng:-76.261410,price:'240000'},
  {id:'4',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',lat:36.931320,lng:-76.252630,price:'185000'},
  {id:'5',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'4',bath:'3',sqft:'3129',address:'1678 Beaconshire Rd, Houston, TX 77077',lat:29.7515571,lng:-95.6113926,price:'345000'},
  {id:'6',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'4',bath:'4',sqft:'3003',address:'1217 Crockett Street, Houston, TX 77007',lat:29.7736952,lng:-95.3692737,price:'650000'},
  {id:'7',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'2',sqft:'1980',address:'3143 W 625 N, Michigan City, IN 46360',lat:41.697507,lng:-86.76075,price:'269900'},
  {id:'8',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'3',bath:'3',sqft:'2678',address:'2725 Lake Shore Drive, Long Beach, IN 46360',lat:41.7493974,lng:-86.8475634,price:'749000'},
  {id:'9',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'5',bath:'6',sqft:'5724',address:'3828 Mockingbird Lane, Highland Park, TX 75205',lat:32.8368785,lng:-96.7969479,price:'2500000'},
  {id:'10',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'5',bath:'3',sqft:'2850',address:'3420 Nomas Street, Dallas, TX 75212',lat:32.7815191,lng:-96.8762402,price:'499900'},
  {id:'11',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'4',bath:'2',sqft:'1511',address:'8122 W Tinajas Drive, Arizona City, AZ 85123',lat:32.7585363,lng:-111.6554531,price:'279900'},
  {id:'12',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'3',bath:'2',sqft:'1662',address:'15778 S Maui Cir, Arizona City, AZ 85123',lat:32.7361603,lng:-111.6791081,price:'350000'},
  {id:'13',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'4',bath:'2',sqft:'1969',address:'311 W Carmean St, Ohio City, OH 45874',lat:40.7714934,lng:-84.619106,price:'119500'},
  {id:'14',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'4',bath:'2',sqft:'1400',address:'332 W 4th St, Spencerville, OH 45887',lat:40.7100838,lng:-84.3578834,price:'194990'},
  {id:'15',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'3',sqft:'2728',address:'7102 Rain Creek Pkwy, Austin, TX 78759',lat:30.4154305,lng:-97.7724885,price:'1300000'},
  {id:'16',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'4',bath:'4',sqft:'3372',address:'11409 Naples Cv, Austin, TX 78739',lat:30.188874,lng:-97.9017581,price:'925000'},
];

const Listings = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);

    return (
        <Listing>
          <h2>Available Listings: </h2>
    
          <div className="listing">
            {DUMMY_LIST.length === 0 && (
              <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {DUMMY_LIST.length > 0 &&
              DUMMY_LIST.map((item) => (
                <Fade bottom>
                  <Link className="textLink" to={`/listingdetail/${item.id}`}>
                    <div className="out" key={item.id}>
                      <div className="card" key={item.id}>
                        <img alt={"users here"} src={`/images/houses/${item.img1}`} />
                        <div className="card-body">
                          <div className="header">
                            <h2>${Number(item.price).toLocaleString()}</h2>
                            <Link
                              to={`/listingdetail/${item.id}`}
                              className="btn btn-sm follow btn-primary"
                            >
                              More Info
                            </Link>
                          </div>
                          <div className="body">
                            <span>{item.bed} Beds</span>
                            <span>{item.bath} Baths</span>
                            <span>{item.sqft} Sqft</span>
                          </div>
                          <div className="footer">
                            <p>{item.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Fade>
              ))}
          </div>
        </Listing>
      );
}

const Listing = styled.div`
  margin: 0 auto;
  width: 98%;
  min-height: 600px;
  margin-top: 20px;
  margin-bottom: 0;

  .textLink {
    text-decoration: none;
  }

  .listing {
    margin-left: 15px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 5px;
  }

  .card {
    opacity: 1;
    width: 290px;

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
      transition: 0.6s;
    }
  }

  .card-body {
    height: 125px;
    color: black;
  }

  .card-body .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-body .body {
    text-align: left;
    margin-top: 5px;

    & span {
      margin-right: 10px;
      border-right: 1px solid black;
      padding-right: 5px;
    }
  }

  .card-body .footer {
    text-align: left;
    margin-top: 10px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: black !important;
  }

  .follow {
    // background-color: #3897f0 !important;
    // border: 1px solid #3897f0 !important;
    background-color: orange !important;
    border: 1px solid orange !important;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 10px;
  }
`;

export default Listings;
