import React from 'react'

function Child2(props) {
    const showPrivateData = true;
    return (
        <div>
            <div>
                {showPrivateData ? <p>This is private: Shreyash</p> : <></>}
                {showPrivateData && <p>This is private: Shreyash</p>}
            </div>
            <p>
                Count inside Child 2 is {props.countFromParent}
            </p>
            <button onClick={props.uploadData}>Upload Data</button>
        </div>
    )


}

export default Child2