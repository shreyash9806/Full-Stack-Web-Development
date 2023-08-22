import React, { useState } from 'react'
import Feet from './Feet';
import Inches from './Inches';
import Yards from './Yards';
import Miles from './Miles';
import Meters from './Meters';
import Cm from './Cm';
import Kilometers from './Kilometers';
import "./style.css"
function UnitConverter() {
    const [convert, setconvert] = useState({
        feet: "",
        inches: "",
        yards: "",
        miles: "",
        meters: "",
        cm: "",
        km: "",
    });
    return (
        <div>
            <div className='heading'>
                <h1>Unit Converter</h1>
            </div>
            <div className='grid-align'>
                <div className="grid-align-1">
                    <Feet setconvert={setconvert} convert={convert} />
                    <Inches setconvert={setconvert} convert={convert} />
                    <Yards setconvert={setconvert} convert={convert} />
                    <Miles setconvert={setconvert} convert={convert} />
                </div>
                <div className="grid-align-2">
                    <Meters setconvert={setconvert} convert={convert} />
                    <Cm setconvert={setconvert} convert={convert} />
                    <Kilometers setconvert={setconvert} convert={convert} />
                </div>

            </div>
        </div>
    )
}

export default UnitConverter