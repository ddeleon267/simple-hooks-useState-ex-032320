import React, { useState } from 'react' // importing the hook

function People() {
    const [name, setName] = useState("Sergey") // setting initial variable, method to change variable value, and using useState to set starting value in state
    const [age, setAge] = useState(72) // setting initial variable, method to change variable value, and using useState to set starting value in state

    const toggleName = () => {
        // updating value of name in state
        name === "Sergey" ? setName("Vlad") : setName("Sergey")
    }

    const getOlder = () => {
        // updating value of age in state
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
