import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Anshumant','Anmol','Ashutosh','Anmol']
    const persons = [
        {
          id: 1,
          name: 'Anmol',
          age: 21,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Anshumant',
          age: 22,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Ashutosh',
          age: 22,
          skill: 'Node'
        }
    ]
    // const listOfNames = names.map(listOfNames => <h2>{listOfNames}</h2>)
    // const personsList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    // const personList = persons.map(person => <Person key={person.id} person={person}/>)   
    const nameList = names.map((name,index) => <Person key={index} index={index}person={name}/>)   
    // return <div>{listOfNames}</div>
    return <div>{nameList}</div>
}

export default NameList
