import { Link } from 'react-router-dom';

export default function Nav(props){

    function search(event){
        let arr = new Array();
        let val = event.target.value;
        props.items.map((ele)=>{
            if(ele.title.toLowerCase().startsWith(val)){
                arr.push(ele);
            }
        })
        props.getState(arr);
    }

    return(
        <nav class="navbar container">
            <Link class="navbar-brand" to="/">AMD</Link>
            <input onKeyUp={search} type="search" placeholder="Search by Name" class="form-control w-50" />
            <div class="nav">
                <Link class="nav-link" to="#">About</Link>
                <Link class="nav-link" to="#">Contact</Link>
                <Link class="nav-link" to="#">Blog</Link>
                <Link class="nav-link" to="#">
                    <button class="btn btn-danger">New User</button>
                </Link>
            </div>
        </nav>
    )
}