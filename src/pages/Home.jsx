import React,{useState} from "react";
import Spinner from "../components/Spinner";
import CountryCard from "../components/CountryCard";
import { Outlet } from "react-router-dom";

const Home = (props) => {

    const {data =[]}=props;

    const [from,setFrom]=useState(0)
    const [limit,setLimit]=useState(21)

    const SLICE=data.slice(from,limit);

   const Pagination=(x,y)=>{

    setFrom(x)
    setLimit(y)
    
   }

  return (
    <>
    
      <div className="container w-75 mx-auto bg-light main-c">
        {data.length===0 ? <Spinner/> :
          SLICE.map((item)=>{
              return (
                <CountryCard item={item}/>
              )
          })}
      </div>
      <div className="col w-25 mx-auto m-4">
      <nav aria-label="...">
  <ul className="pagination pagination-sm">
    <li className="page-item" aria-current="page">
      <span className="page-link" href="#" onClick={()=>{Pagination(0,30)}}>1</span>
    </li>
    <li className="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(31,60)}}>2</span>
      </li>
    <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(61,90)}}>3</span>
      </li>
      <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(91,110)}}>4</span>
      </li>
      <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(111,140)}}>5</span>
      </li>
      <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(141,170)}}>6</span>
      </li>
      <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(171,200)}}>7</span>
      </li>
      <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(201,230)}}>8</span>
      </li>
      <li class="page-item">
      <span className="page-link" href="#" onClick={()=>{Pagination(231,250)}}>9</span>
      </li>
  </ul>
</nav>
      </div>
<>
<Outlet/>
</>
    </>
  );
};

export default Home;
