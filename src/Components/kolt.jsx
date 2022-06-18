function OneKolt({ oneKolt, setDeleteData, setModalData }) {

    const koltDelete = () => {
        setDeleteData(oneKolt);
    }

    const koltEdit = () => {
        setModalData(oneKolt);
    }

    return (
        <li className="list-item">
                <div className="content">
                    <span className="item">{oneKolt.code}</span>
                    <span className="item">{oneKolt.time}</span>
                    <span className="item">{oneKolt.km} km</span>
                    <span className="item">{oneKolt.isBusy ? <div className="uzimtas">Busy</div>:<div className="laisvas">Available</div>}</span>
                    <div className="buttons">
                    <button type="button" className="btn2" onClick={koltEdit}>Edit</button>
                    <button type="button" className="btn2" onClick={koltDelete}>Delete</button>
                    </div>
                </div>
            
        </li>
    );
}

export default OneKolt;