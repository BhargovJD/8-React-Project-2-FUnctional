import React from 'react'

export default function Search({setSearchTerm }) {
    return (
        <div class="text-center ">
            <div class="text-center" class="container">
                <div class="row">
                    <div class="col-sm-2">

                    </div>
                    <div class="col-sm-8 ">
                        <input onChange={(e) => { setSearchTerm(e.target.value) }} type="text" class="form-control text-center" placeholder="Search item" aria-label="Username" aria-describedby="basic-addon1" />

                    </div>
                    <div class="col-sm-2">

                    </div>
                </div>
            </div>
        </div>
    )
}
