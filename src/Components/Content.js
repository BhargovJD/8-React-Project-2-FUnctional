import React from 'react'
import { useState, useEffect } from 'react'
import Add from './Add';
import Search from './Search';

export default function Content() {


    const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);


    //useEffect run when items changes: Dependency is  items array
    // useEffect(() => {
    //     console.log("load time");
    // }, [items]);

    useEffect(() => {

        localStorage.setItem('shoppinglist', JSON.stringify(items));

    }, [items]);


    // Changing items state when check button clicked and saving items array in  listItems as items....................
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    // Delete item................................
    const handleDelete = (id) => {
        // console.log(id);

        const listItems = items.filter((item) => item.id !== id);

        setItems(listItems);

        // Saving items array in local storage
        localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    }


    // Add new item................................

    // Creating a new state item
    const [newItem, setNewItem] = useState('')

    // Function to add new item

    const addItem = (item) => {

        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const myNewItem = { id, name: item };
        const listItems = [...items, myNewItem];
        console.log(listItems)

        setItems(listItems);

        // Saving items array in local storage
        // localStorage.setItem('shoppinglist', JSON.stringify(listItems));

    }

    // new item submit handler

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newItem) return;
        addItem(newItem);
        setNewItem('');

    }


    // Search...............................
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div>
            <div class="text-center ">
                <div class="text-center" class="container">
                    <div class="row">
                        <div class="col-sm-2">

                        </div>
                        <div class="col-sm-8 ">
                            <br />

                            <Add newItem={newItem} setNewItem={setNewItem} submit={handleSubmit} />
                            <br />


                            <h5>All items</h5>

                            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                            <table class="table">
                                <thead>
                                    <tr>

                                        <th >Id</th>
                                        <th>Is Checked</th>
                                        <th >Item name</th>
                                        <th >Action</th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {items.filter(val => {
                                        if (searchTerm === "") {
                                            return val;
                                        }
                                        else if (
                                            val.name.toLowerCase().includes(searchTerm.toLowerCase())
                                        ) {
                                            return val;
                                        }

                                    }).map(m => (
                                        <tr key={m.id}>

                                            <td>{m.id}</td>

                                            <td><input onChange={() => handleCheck(m.id)} class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={m.checked} /></td>
                                            <td>{m.name}</td>


                                            <td>  <button onClick={() => handleDelete(m.id)} type="button" class="btn btn-danger">Delete</button>
                                            </td>

                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                        <div class="col-sm-2">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
