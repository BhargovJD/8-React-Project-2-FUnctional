import React from 'react'
import { useRef } from 'react';


export default function Add({ newItem, setNewItem, submit }) {

    // useRef
    const inputRef = useRef();

    return (
        <div class="text-center ">
            <div class="text-center" class="container">
                <div class="row">
                    <div class="col-sm-2">

                    </div>
                    <div class="col-sm-8 ">
                        <form onSubmit={(e) => submit(e)}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Add some item</label>
                                <input ref={inputRef} type="text" class="form-control" value={newItem} onChange={(e) => setNewItem(e.target.value)} />

                            </div>
                            <button onClick={() => { inputRef.current.focus() }} type="submit" class="btn btn-success">Add</button>
                        </form>
                    </div>
                    <div class="col-sm-2">

                    </div>
                </div>
            </div>
        </div>
    )
}
