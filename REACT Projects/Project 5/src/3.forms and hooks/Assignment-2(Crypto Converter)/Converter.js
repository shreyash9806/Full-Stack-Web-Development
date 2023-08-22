import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Input, Select } from 'antd'
import './style.css'
function Converter() {
    const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates`;
    const defaultFirstValue = 'Bitcoin';
    const defaultSecondValue = 'Ether';
    const [cryptoList, setCryptoList] = useState([]);
    const [inputValue, setInputValue] = useState(0);
    const [firstInputValue, setFirstInputvalue] = useState(defaultFirstValue);
    const [SecondInputValue, setSecondInputvalue] = useState(defaultSecondValue);
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const data = jsonData.rates;

        const tempArr = Object.entries(data).map((item) => {
            return {
                value: item[1].name,
                label: item[1].name,
                rate: item[1].value
            }
        });
        console.log(tempArr);
        setCryptoList(tempArr);
    }
    const [x, setX] = useState(0);

    useEffect(() => {
        if (cryptoList.length === 0) {
            return;
        }
        const firstObj = cryptoList.find((item) => {
            return item.value === firstInputValue;
        });
        const secondObj = cryptoList.find((item) => {
            return item.value === SecondInputValue;
        });

        const result = (inputValue * secondObj.rate) / (firstObj.rate);

        setX(result.toFixed(3));
        if (inputValue === "") {
            setInputValue(0);
        }
    }, [inputValue, firstInputValue, SecondInputValue])



    function inputFeeder(e) {
        setInputValue(e.target.value);
    }


    return (
        <div className='container'>
            <Card className='crypto-card' title={<h1>Crypto Converter</h1>}>
                <Form>
                    <Form.Item>
                        <Input onChange={inputFeeder} />
                    </Form.Item>
                </Form>
                <div className="select-box">
                    <Select style={{ width: "120px" }}
                        defaultValue={defaultFirstValue}
                        options={cryptoList}
                        onChange={(value) => { setFirstInputvalue(value) }}
                    />
                    <Select
                        onChange={(value) => { setSecondInputvalue(value) }}
                        style={{ width: "120px" }} defaultValue={defaultSecondValue} options={cryptoList} />
                </div>
                <p className='Para-style'>{inputValue} {firstInputValue} = {x} {SecondInputValue}</p>
            </Card>
        </div>
    )
}

export default Converter