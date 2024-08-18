import './Main.css'
import Bitmap from "../../assets/imges/Bitmap-BBVYA7up.png"
function Main (){
    return(
 <div id="maindiv">
    <div id="leftdiv">
<img src={Bitmap}/>
    </div>

    <div id="rightdiv">
        <div id="div1">
            <div id="octocatdiv">
        <label >   The Octocat</label>
        <label>@octocat</label>
            </div>
            <label>joined 25 jan 2011</label>
        </div>
        <div id="div2">
            <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
            </p>
        </div>
    </div>

   
 </div>
    )
}
export default Main