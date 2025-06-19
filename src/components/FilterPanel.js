import { useState } from "react";

export default function FilterPage(props){

    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(true);
    const [toggle3, setToggle3] = useState(true);
    const [toggle4, setToggle4] = useState(true);
 
    let objects = new Array();
 
    function filter1()
    {
        setToggle1(!toggle1)
        if(toggle1)
        {
            props.props.map((val)=>{
                if(val.price >= 0 && val.price < 50)
                {
                    objects.push(val);
                }
            })
            return props.getState(objects);
        }
        return props.getState(props.props)
    }

    function filter2()
    {
        setToggle2(!toggle2)
        if(toggle2)
        {
            props.props.map((val)=>{
                if(val.price >= 50 && val.price < 100)
                {
                    objects.push(val)
                }
            })
            return props.getState(objects)
        }
        return props.getState(props.props)
    }

    function filter3()
    {
        setToggle3(!toggle3)
        if(toggle3)
        {
            props.props.map((val)=>{
                if(val.price >= 100 && val.price < 1000)
                {
                    objects.push(val)
                }
            })
            return props.getState(objects)
        }
        return props.getState(props.props)
    }

    function filter4()
    {
        setToggle4(!toggle4)
        if(toggle4)
        {
            props.props.map((val)=>{
                if(val.price >= 1000)
                {
                    objects.push(val)
                }
            })
            return props.getState(objects)
        }
        return props.getState(props.props)
    }

    function clearFilter()
    {
        window.location.reload()
    }
 
    return (
        <div class="col-2">
            <h5>Price Filter</h5>
            <div class="my-3">
                <input type="radio" name="filter" class="form-check-input" onClick={filter1}/> <span> 0 - 50</span> <br/>
            </div>
            <div class="my-3">
                <input type="radio" name="filter" class="form-check-input" onClick={filter2}/> <span> 50 - 100 </span> <br/>
            </div>
            <div class="my-3">
                <input type="radio" name="filter" class="form-check-input" onClick={filter3}/> <span> 100 - 1000</span> <br/>
            </div>
            <div class="my-3">    
                <input type="radio" name="filter" class="form-check-input" onClick={filter4}/> <span> &gt; 1000</span><br/>
            </div>
            <button onClick={clearFilter}>Clear filters</button>
        </div>
    );
}