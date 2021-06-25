import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const MainImage = () => {
    return(
        <Fade>
            <MainImg>
                <div class="search-section">
                    <div><h1>Start your dream house here with OwnCrib</h1></div>
                    <div class="search">
                        <input type="text" placeholder="Enter an adress, neighborhood, city, or ZIP code..." />
                        <button type="submit">Search</button>
                    </div>
                </div>
            </MainImg>
        </Fade>
        
    );
}

const MainImg = styled.div`
    background-image: url("images/landing-page-picture.jpeg");
    height: 550px;
    background-size: 100% 550px;
    background-repeat: no-repeat;

    .search-section{
        padding-top: 20px;
        text-align: center;
    }
    
    .search-section h1{
        color: white;
    }
    
    .search{
        padding-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .search input {
        width: 600px;
        height: 55px;
        border: none;
        opacity: 0.6;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        padding: 10px;
        outline: none;
        font-size: 20px;
        cursor: pointer;
    }
    
    .search button{
        height: 55px;
        width: 100px;
        border: none;
        background-color: red;
        opacity: 0.6;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        outline: none;
        cursor: pointer;
        font-size: 20px;
    }
    
    .search input:hover{
        opacity: 0.8;
    }
    
    .search button:hover{
        opacity: 0.8;
    }
    

`;

export default MainImage; 