import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const SliderCalculator = () => {

    const [number,setNumber] = useState('400000');
    const [agentFee,setAgentFee] = useState('0');
    const [saving,setSaving] = useState('0');

    useEffect(() => {
        const result = Number(number);
        const fee = (result * 0.06).toFixed(0);
        const save = fee - 500;
        setAgentFee(fee.toString());
        setSaving(save.toString());
    },[number]);

    const numberChangeHandler = (event) => {
        event.preventDefault();
        setNumber(event.target.value);
        const result = Number(event.target.value);
        const fee = (result * 0.06).toFixed(0);
        const save = fee - 500;
        setAgentFee(fee.toString());
        setSaving(save.toString());
    }

    return (
        <Fade>
        <Container>
            <div className="container">
                <h1>Savings Calculator</h1>
                <h3>Your Home Price</h3>
                <span className="rs-label">${Number(number).toLocaleString()}</span>
                <div className="range-slider">
                    <input onInput={numberChangeHandler} value={number} defaultValue={number} className="rs-range" type="range" min="50000" max="2000000" />
                </div>
            </div>
            <div className='compare'>
                <div>
                    <small>Standard Commission 6%</small>
                    <p>${Number(agentFee).toLocaleString()}</p>
                </div>
                <div>
                    <span style={{fontSize:'25px'}}>Our Unchanged Price</span>
                    <p style={{fontSize:'20px',color:'yellow'}}>$500</p>
                </div>
                <div>
                    <span style={{fontSize: '30px'}}>OwnCrib Saves You At Least</span>
                    <p style={{fontSize:'25px',color:'orange'}}>${Number(saving).toLocaleString()}</p>
                </div>
            </div>
        </Container>
        </Fade>
    )
}

const Container = styled.div`

    width: 100%;
    min-height: 400px;
    padding: 20px;

    h1{
        text-transform: uppercase;
        margin-bottom: 20px;
        color: #BBC5CF;
    }

    h3{
        color: #fff;
    }

    .compare{
        margin: 0 auto;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;

        & div{
            padding: 25px;
            color: #fff;
        }
    }

    // background: linear-gradient(180deg,#DB302A 0%,#62186B 100%) no-repeat;

    background-color: #4D4E4F;
    
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .rs-range {
        margin-top: 10px;
        width: 800px;
        border: 2px solid white;
        -webkit-appearance: none;
        &:focus {
            outline: none;
        }
        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 1px;
            cursor: pointer;
            box-shadow: none;
            background: #ffffff;
            border-radius: 0px;
            border: 0px solid #010101;
        }
        &::-moz-range-track {
            width: 100%;
            height: 1px;
            cursor: pointer;
            box-shadow: none;
            background: #ffffff;
            border-radius: 0px;
            border: 0px solid #010101;
        }
      
        &::-webkit-slider-thumb {
            box-shadow: none;
            border: 0px solid #ffffff;
            box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
            height: 42px;
            width: 22px;
            border-radius: 22px;
            background: rgba(255,255,255,1);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -20px;
        }
      &::-moz-range-thumb{
            box-shadow: none;
            border: 0px solid #ffffff;
            box-shadow: 0px 10px 10px rgba(0,0,0,0.25);
            height: 42px;
            width: 22px;
            border-radius: 22px;
            background: rgba(255,255,255,1);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -20px;
      }
      &::-moz-focus-outer {
        border: 0;
        }
    }


    .rs-label {
    
        position: relative;
        // transform-origin: center center;
        display: block;
        width: 98px;
        height: 98px;
        // background: transparent;
        border: none;
        text-align: center;
        font-weight: bold;
        box-sizing: border-box;
        margin-left: -38px;
        color: red;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        font-size: 36px;
    }

`;

export default SliderCalculator;
