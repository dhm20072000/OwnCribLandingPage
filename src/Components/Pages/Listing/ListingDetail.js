import React, {useState, useParams, useEffect, Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const DUMMY_LIST = [
    {id:'1',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'2',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'3',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'4',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
    {id:'5',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'6',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'7',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'8',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
    {id:'9',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'10',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'11',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'12',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
    {id:'13',img1:'house1.jpg',img2:'house1_1.png',img3:'house1_2.png',img4:'house1_3.png',img5:'house1_4.png',bed:'1',bath:'2',sqft:'2121',address:'111 Pennsylvania Ave, Norfolk, VA 23504',price:'550,000'},
    {id:'14',img1:'house2.jpg',img2:'house2_1.png',img3:'house2_2.png',img4:'house2_3.png',img5:'house2_4.png',bed:'2',bath:'2',sqft:'1575',address:'805 Graydon Avenue 101, Norfolk, VA 23507',price:'329,000'},
    {id:'15',img1:'house3.jpg',img2:'house3_1.png',img3:'house3_2.png',img4:'house3_3.png',img5:'house3_4.png',bed:'3',bath:'3',sqft:'1610',address:'3129 Dunkirk Ave, Norfolk, VA 23509',price:'240,000'},
    {id:'16',img1:'house4.jpg',img2:'house4_1.png',img3:'house4_2.png',img4:'house4_3.png',img5:'house4_4.png',bed:'2',bath:'3',sqft:'1540',address:'8550 Tidewater Drive D2, Norfolk, VA 23503',price:'185,000'},
];

// const images = [
//     '/images/houses/house1.jpg',
//     '/images/houses/house1_1.png',
//     '/images/houses/house1_2.png',
//     '/images/houses/house1_3.png',
//     '/images/houses/house1_4.png',
// ];

const ListingDetail = (props) => {

    const [images,setImages] = useState([]);
    const [detail,setDetail] = useState({});
    const [photoIndex,setPhotoIndex] = useState(0);
    const [isOpen,setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
        const id = props.match.params.id;
        console.log("ID",id);
        const item = DUMMY_LIST.filter(item => item.id === id)[0];
        setDetail(item);
        setImages([
            '/images/houses/' + item.img1,
            '/images/houses/' + item.img2,
            '/images/houses/' + item.img3,
            '/images/houses/' + item.img4,
            '/images/houses/' + item.img5
        ])
    },[]);

    const OpenPhoto = (event) => {
        event.preventDefault();
        setIsOpen(true);
        const source = event.target.src;
        let index;
        for(let i = 0;i < images.length;i++){
            if(source.includes(images[i])){
                index = i;
            }
        }
        setPhotoIndex(index);
    }

    return (
        <Details>
            {/* <button type="button" onClick={() => setIsOpen(true)}>
                Open Lightbox
            </button>    */}

            <div className='images'>
                <Fade left>
                <div className='left_section'>
                    <img src={images[0]} onClick={OpenPhoto} alt="" />
                </div>
                </Fade>
                <Fade right>
                <div className='right_section'>
                    <div className='right_section_one'>
                        <img src={images[1]} onClick={OpenPhoto} alt="" />
                        <img src={images[2]} onClick={OpenPhoto} alt="" />
                    </div>
                    <div className='right_section_two'>
                        <img src={images[3]} onClick={OpenPhoto} alt="" />
                        <img src={images[4]} onClick={OpenPhoto} alt="" />
                    </div>
                </div>
                </Fade>
            </div>

            <Fade bottom>
            <div className='contents'>
                <div className='content'>
                    <div>
                        <div className='header'>
                            <h2>${detail.price}</h2>
                        </div>
                        <div className='body'>
                            <span>{detail.bed} Beds</span><span>{detail.bath} Baths</span><span>{detail.sqft} Sqft</span>
                        </div>
                        <div className='footer'>
                            <p>{detail.address}</p>
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <button type='button'>Request Info</button>
                    <span>Or Call to ask about this home today!</span>
                    <span>012-345-6789</span>
                </div>
            </div>

            <div className='bottom-section'>
                <h1>Description:</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis metus vel justo luctus condimentum. Nam pharetra ante quis turpis feugiat varius. Aenean felis ante, dictum a nisl in, ultrices ultricies dolor. Morbi et diam lobortis nunc sodales pulvinar vel a ex. Morbi placerat luctus nisl, vitae imperdiet mauris consequat egestas. Nullam vitae sagittis lectus. Phasellus id ipsum ac nibh semper molestie.
                Mauris eget mi magna. Phasellus vestibulum non turpis quis semper. Duis est justo, viverra et ipsum eget, tincidunt tincidunt diam. Vivamus iaculis lacinia risus, quis mattis velit pretium id. Phasellus in purus felis. Aliquam aliquet dictum odio, non laoreet felis aliquet at. In accumsan, lectus non feugiat lobortis, purus nibh varius massa, ultrices dictum tellus lorem vitae enim. Praesent dictum mauris leo, at placerat turpis molestie a. Cras luctus orci at libero aliquet congue. Curabitur fringilla luctus risus, quis tincidunt magna blandit nec.
                </p>
            </div>
            </Fade>

            {isOpen && (
            <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => {
                    setPhotoIndex((photoIndex + images.length - 1) % images.length);
                }
                    
                }
                onMoveNextRequest={() => {
                    setPhotoIndex((photoIndex + 1) % images.length);
                }
                }
            />
            )}
        </Details>
    )
}

const Details = styled.div`
    margin: 0 auto;
    width: 98%;
    min-height: 600px;
    overflow: hidden;
    padding-left: 10px;

    & img:hover{
        cursor: pointer;
    }

    .images{
        display: flex;
    }

    .images .left_section{
        
        img{
            width: 620px;
            height: 400px;
        }
    }

    .images .right_section{
        img{
            width: 280px;
            height: 195px;
            margin-left: 10px;
            margin-bottom: 10px;
        }
    }

    .contents{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .contents .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        span{
            margin-top: 10px;
            font-weight: 600;
            font-size: 20px;
        }

        button{
            padding: 5px;
            background-color: #00386B;
            color: white;
            border-radius: 6px;
            display: block;
            width: 60%;
            letter-spacing: 1px;
            border: none;
        }

    }

    .content .header{
        margin-top: 20px;
    }

    .content .body{

        margin-top: 5px;

        & span{
            margin-right: 10px;
            border-right: 1px solid black;
            padding-right: 5px;
        }
    }

    .content .footer{
        text-align: left;
        margin-top: 10px;
    }

`;

// class ListingDetail extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         photoIndex: 0,
//         isOpen: false,
//       };
//     }
  
//     render() {
//       const { photoIndex, isOpen } = this.state;
//       const images = [
//         '/images/houses/house1.jpg',
//         '/images/houses/house1_1.png',
//         '/images/houses/house1_2.png',
//         '/images/houses/house1_3.png',
//         '/images/houses/house1_4.png',
//     ];
      
//       return (
//         <div>
//           <button type="button" onClick={() => this.setState({ isOpen: true })}>
//             Open Lightbox
//           </button>
  
//           {isOpen && (
//             <Lightbox
//               mainSrc={images[photoIndex]}
//               nextSrc={images[(photoIndex + 1) % images.length]}
//               prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//               onCloseRequest={() => this.setState({ isOpen: false })}
//               onMovePrevRequest={() =>
//                 this.setState({
//                   photoIndex: (photoIndex + images.length - 1) % images.length,
//                 })
//               }
//               onMoveNextRequest={() =>
//                 this.setState({
//                   photoIndex: (photoIndex + 1) % images.length,
//                 })
//               }
//             />
//           )}
//         </div>
//       );
//     }
//   }

export default ListingDetail;
