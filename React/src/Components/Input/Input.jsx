import './Input.css'
import Search from '../../assets/imges/تنزيل (4).png'
function Input(){
    return(

       <div id='inputdiv'>
        <div id="searchdiv">
        <img src={Search} />
        <input id="input"></input>
        </div>
      <button>SEARCH</button>
       </div>
    )
}
export default Input