
import './kolt.scss';
import { useState, useEffect} from "react";
import { create, read, remove, edit } from './Functions/localStorageKolt';
import KoltList from './Components/LIST';
import KoltEdit from './Components/EDIT';
import ScooterImage from './Components/scooter-image';
import KoltForm from './Components/CREATE';
import Statistics from './Components/STATISTICS';





function App() {

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const [kolt, setKolt] = useState(null);
    const [modalData, setModalData] = useState(null);


    const [createKolt, setCreateKolt] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editData, setEditData] = useState(null);

  

   // Read (Kolt-form)
   
    useEffect(() => {
        setKolt(read());
    }, [lastUpdate]);

    // Create (Kolt-form)
     useEffect(() => {
        if (null === createKolt) {
            return;
        }
        create(createKolt);
        setLastUpdate(Date.now());

    }, [createKolt]);

    // Delete
    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        remove(deleteData);
        setLastUpdate(Date.now());

    }, [deleteData]);

     // Edit
     useEffect(() => {
        if (null === editData) {
            return;
        }
        edit(editData);
        setLastUpdate(Date.now());

    }, [editData]);


    return (
        <>
        <div className="App">
            <header className="App-header">
            </header>
            <div className="container">
            <div className="row">
            <div className="col-lg-5 col-ml-12">
            <KoltForm setCreateKolt={setCreateKolt}></KoltForm>
            </div>
            <div className="col-7 col-ml-12">
                <ScooterImage></ScooterImage>
            </div>
            <div className="col-12">
            <KoltList kolt={kolt} setDeleteData={setDeleteData} setModalData={setModalData}></KoltList>
            <Statistics kolt={kolt}></Statistics>
            </div>
            </div>
            <KoltEdit setEditData={setEditData} modalData={modalData} setModalData={setModalData}></KoltEdit>
            </div>
            
        </div>
        
        </>
    );
}

export default App;
