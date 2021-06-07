import map from '../images/map.png';
import pro from '../images/pro.jpg';

function Orderpage () {
    
   return (
     <div className="page ">
      <h1>order placed successfully</h1>
      <div>3:55 PM | Order ID: 802910202</div>
      
      <div className="cent">
          <img className="map" src={map} alt=""/>
          <h3 className="box">estimated time in <strong>20 minutes</strong></h3>
      </div>
      <div>
      <img className="pro" src={pro} alt=""/>
      <div className="mid">
      <h3><strong>gippy</strong> is on the way, pick up the samples.</h3>
      <button className="btn" onClick={()=>alert('calling')}>call</button>
      </div>
      </div>
     
     
     </div>     

   );
 }
 
 export default Orderpage;
 