import React from 'react'

function Person({person,index}) {
    return (
        <div>
            <h2>
                {/* I am {person.name}. I am {person.age} years old. I know {person.skill} */}
                {index+1} - My name is {person}
            </h2>
        </div>
    )
}

export default Person
