import ClearIcon from '@mui/icons-material/Clear';
import { useEffect, useState } from 'react';
import visit from "../../data/data"

import "./Visit.scss"
import VisitTabs from '../VisitTop/VisitTabs';
import VisitChilde from '../VisitChilde/VisitChiled';

const Visit = () => {
    
    const [tab , setTab] = useState("Chill Adventure")
    const [childe , setChilde] =useState('')
    const viewFunc = (val = "Chill Adventure")=>{
        setTab(val)
    }
    useEffect(()=>{
        const filteredView =  visit.filter(data=>{
            return data.name == tab
        })
        setChilde(filteredView)
    }, [tab])
    return (
        <div className="Visit">
            <div className="top">
                <div className="title">Pick your trip</div>
                <ClearIcon style={{width:"16px" , color: "rgba(65, 234, 212, 1)" }} />
                <div className="text">
                    Our team put together some trips to you to discover,
                    feel free to discover each of them.
                </div>
            </div>
            <div className="menuBar">
                <div className="tabs">
                    {visit.map((data, rowId)=>{
                        return (
                            <VisitTabs data={data.name} key={rowId} viewFunc={viewFunc} tab={tab}/>
                        )
                    })}
                </div>
            </div>
            <div className="Childe">
                <VisitChilde filteredView={childe[0]} />
            </div>
        </div>
    )
}

export default Visit
