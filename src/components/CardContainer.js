import React, {useState, useEffect} from 'react'
import Card from './Card'
import data from '../data'

const CardContainer = () => {
    const [id, setId] = useState(1)
    const [selected, setSelected] = useState(data[0]);
    const [length, setLength] = useState(data.length);

    const [prevDisabled, setPrevDisabled] = useState(false);
    const [nextDisabled, setNextDisabled] = useState(false);

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
            setSelected(data.find(user => user.id === id-1))
            setLength(data.length)

    }

    const findNext = () => {
        setId(id + 1);
        setSelected(data.find(user => user.id === id+1))
        setLength(data.length)
    }
    return (
        <div className="card-container">
            <Card id={id} selected={selected} length={length}/>
        
            <div className="button-container">
                <button className="side-buttons" disabled={prevDisabled} onClick={findPrev}>Previous</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>

                <button className="side-buttons" disabled={nextDisabled} onClick={findNext}>Next</button>
            </div>
        </div>
    )
}

export default CardContainer
