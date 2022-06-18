import { useEffect } from "react";
import { useState } from "react";
import OneKolt from "./kolt";


function KoltList({kolt, setDeleteData, setModalData}) {
    
    const [copy, setCopy] = useState([]); // sort tik ant kopiju
   useEffect(() => {
    if (null === kolt) {
      return;
    }
    setCopy([...kolt]);
  }, [kolt]);

  const sortKm = () => {
    setCopy(
      [...copy].sort((a, b) => a.km - b.km)
    );
  }
const sortDate = () => {
        setCopy(
      [...copy].sort((a, b) => Date.parse(a.time) - Date.parse(b.time))
      );
        
    
  };

    return (
        <div className='list-column'>
        <div>
           <h2>Scooter List</h2>  
       </div>
       <div className="form-group">
       <ul className="kolt-list">
           {
          copy.map(oneKolt => <OneKolt key={oneKolt.id} oneKolt={oneKolt} setDeleteData={setDeleteData} setModalData={setModalData} ></OneKolt>)
        }
       </ul>
       <div className="buttons2">
       <button className="btn" onClick={sortDate}>Sort by date</button>
       <button className="btn" onClick={sortKm}>Sort by km</button>
       
       </div>
   </div>
   </div>
    );
}

export default KoltList;