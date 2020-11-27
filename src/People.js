import React, { useState } from 'react'

function People() {
    const [name, setName] = useState("Sergey")
    const [age, setAge] = useState(72)

    const toggleName = () => {
        name === "Sergey" ? setName("Vlad") : setName("Sergey")
    }

    const getOlder = () => {
        setAge(age + 1)
    }

    return (
        <div>
            <h2>The name is: {name}</h2>
            <button onClick={toggleName}>Change name</button>
            <br/>
            <h2>The age is: {age}</h2>
            <button onClick={getOlder}>Get Older</button>
        </div>
    )
}

export default People




// import React, { Component } from 'react'

// export default class People extends Component {
//     constructor(props){
//         super(props)

//         this.state = {

//         }
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
