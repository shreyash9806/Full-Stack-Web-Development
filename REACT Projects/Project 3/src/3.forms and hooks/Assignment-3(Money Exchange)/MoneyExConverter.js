import React, { useEffect, useState } from 'react'
import "./style.css"
import { Form, Input, Select } from 'antd'
function MoneyExConverter() {
    const apiUrl = `https://open.er-api.com/v6/latest/USD`;
    const [moneyExList, setMoneyExList] = useState([]);
    const defaultFirstValue = "USD";
    const defaultSecondValue = "GBP";
    const [inputValue, setInputValue] = useState(0);
    const [firstInputvalue, setFirstInputvalue] = useState(defaultFirstValue);
    const [secondInputvalue, setSecondInputvalue] = useState(defaultSecondValue);
    const [result, setresult] = useState('');
    const [y, setY] = useState(0.89);
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (moneyExList.length === 0) { return }

        const firstObj = moneyExList.find((item) => {
            return item.value === firstInputvalue;
        }).rate;

        const secondObj = moneyExList.find((item) => {
            return item.value === secondInputvalue;
        }).rate;

        const x = (secondObj * inputValue) / (firstObj);
        const z = (secondObj / firstObj);
        setresult(x.toFixed(4));
        setY(z.toFixed(2));
    }, [inputValue, firstInputvalue, secondInputvalue])
    function inputFeeder(e) {
        setInputValue(e.target.value)
    }
    async function fetchData() {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();

        const data = jsonData.rates;

        const tempArr = Object.entries(data).map((item) => {
            return {
                label: item[0],
                value: item[0],
                rate: item[1]
            }
        })
        setMoneyExList(tempArr);
    }

    return (
        <div className='container'>
            <div className='inner-box'>
                <div className="inner-box-1">
                    <h3 className='heading'>You Have</h3>
                    <Form>
                        <Form.Item>
                            <Input onChange={inputFeeder} className='input' />
                        </Form.Item>
                    </Form>
                </div>
                <div className="inner-box-1">
                    <p className='para'>First Currency</p>
                    <Select onChange={(e) => { setFirstInputvalue(e) }} options={moneyExList} defaultValue={defaultFirstValue} className='one' />
                </div>
                <p style={{ color: "black" }} ><i class="fa-solid fa-money-bill"></i> Money Exchange Converter.</p>
            </div>
            <div style={{ backgroundColor: "#cccccc1d" }} className='inner-box'>
                <div className="inner-box-1">
                    <h3 className='heading'>You Get</h3>
                    <Form>
                        <Form.Item>
                            <Input value={result} className='input' />
                        </Form.Item>
                    </Form>
                </div>
                <div className="inner-box-1">
                    <p className='para'>Second Currency</p>
                    <Select onChange={(e) => { setSecondInputvalue(e) }} options={moneyExList} defaultValue={defaultSecondValue} className='one' />
                </div>
                <p style={{ fontWeight: "500" }}>1 {firstInputvalue} = <span>{y}{secondInputvalue}</span></p>
            </div>
            <i class="exchanger fa-solid fa-arrow-right-arrow-left"></i>
        </div>
    )
}

export default MoneyExConverter