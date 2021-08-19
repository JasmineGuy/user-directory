import React, {useState, useEffect} from 'react'
import Card from './Card'
import data from '../data'

const CardContainer = () => {
    const [users, setUsers] = useState([]);
    const [id, setId] = useState();
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
            setId(data[0].id)
            setPending(false)
        }, 1000)
    },[])

    console.log('users:',users)

    useEffect(()=> {
        if(id ===1){
            setPrevDisabled(true)
        } else {
            if(prevDisabled){
                setPrevDisabled(false)
            }
        }
        if(id ===length){
            setNextDisabled(true)
        } else{
            if(nextDisabled){
                setNextDisabled(false)
            }
        }

    },[id, length,prevDisabled, nextDisabled])


    const findPrev = () => {
            setId(id - 1);
            setSelected(users.find(user => user.id === id-1))
            setLength(users.length)

    }

    const findNext = () => {
        setId(id + 1);
        setSelected(users.find(user => user.id === id+1))
        setLength(users.length)
    }

    const deleteUser =() => {
        let usersCopy =[...users]
        console.log('users-before', usersCopy)
        let index = usersCopy.findIndex((user)=> user.id ===selected.id)
        console.log('index:', index)
        usersCopy.splice(index, 1)
        console.log('users-after',usersCopy)
        setUsers(usersCopy)
        
    }
    return (
        <div className="card-container">
        
            <Card pending={pending} id={id} selected={selected} length={length}/>
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
