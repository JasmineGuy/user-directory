import React, {useState, useEffect} from 'react'
import Card from './Card'
import data from '../data'

const CardContainer = () => {
    const [users, setUsers] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState();
    const [selected, setSelected] = useState();
    const [length, setLength] = useState();
    const [pending, setPending] = useState(false);

    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);

    useEffect(()=> {
        setPending(true);
        setTimeout(()=> {
            setUsers(data)
            setSelected(data[0])
            setLength(data.length)
            setPending(false)
            setSelectedIndex(0)
        }, 1000)
    },[])

    useEffect(()=> {
        if(selectedIndex ===0){
            setPrevDisabled(true)
        } else {
            if(prevDisabled){
                setPrevDisabled(false)
            }
        }
        if(selectedIndex ===length -1){
            setNextDisabled(true)
        } else{
            if(nextDisabled){
                setNextDisabled(false)
            }
        }

    },[selectedIndex, length, prevDisabled, nextDisabled])


    const findPrev = () => {
            const foundIndex = users.findIndex((user => user.id === selected.id))
            setSelected(users[foundIndex -1])
            setSelectedIndex(selectedIndex -1)
    }

    const findNext = () => {
        const foundIndex = users.findIndex((user)=> user.id === selected.id)
        setSelected(users[foundIndex + 1])
        setSelectedIndex(selectedIndex +1)
    }

    const deleteUser =() => {
        let usersCopy =[...users]
        let index = usersCopy.findIndex((user)=> user.id ===selected.id)
        usersCopy.splice(index, 1)
        setUsers(usersCopy)
        setLength(usersCopy.length)
        setSelected(users[index -1])
        setSelectedIndex(selectedIndex -1)
    }
    return (

        <div className="card-container">
        
            <Card selectedIndex={selectedIndex} pending={pending} selected={selected} length={length}/>
            <div className="button-container">
                <button className="side-buttons" disabled={prevDisabled} onClick={findPrev}>Previous</button>
                <section>
                    <button className="crud-buttons">Edit</button>
                    <button className="crud-buttons" onClick={deleteUser}>Delete</button>
                    <button className="crud-buttons">New</button>
                </section>

                <button className="side-buttons" disabled={nextDisabled} onClick={findNext}>Next</button>
            </div>
        </div>
    )
}

export default CardContainer
