import React, { useState } from "react"

const Todo = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)

    }

    const listOfItems = () => {

        setItems((oldItems) => {
            return [...oldItems, inputList];
        });

        setInputList(" "); // for input empty after click on add.
    };




    return (
        <div className="main-div">
            <div className="center-div">
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text"
                    placeholder="Enter Text"
                    onChange={itemEvent}
                    value={inputList}
                />
                <button onClick={listOfItems}>ADD </button>

                <ol>
                    {/*<li>
                        {inputList}
                    </li>*/}

                    {Items.map((itemsval) => {
                        return <li> {itemsval} </li>
                        
                    })}


                </ol>

            </div>

        </div>


    )
}

export default Todo;