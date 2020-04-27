import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['Anshumant','Anmol','Ashutosh']
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ]
    // const listOfNames = names.map(listOfNames => <h2>{listOfNames}</h2>)
    // const personsList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>)
    const personList = persons.map(person => <Person person={person}/>)   
    // return <div>{listOfNames}</div>
    return <div>{personList}</div>
}

export default NameList
