import React,{useEffect,useState} from 'react'
import { db } from '../../Firebase';
import '../../styles/FilesView.css';
import Fileitems from './Fileitems';
import Filecard from './Filecard'

export default function Fileview() {
    const [file,setFile] = useState([]);
    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFile(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])
    return (
            <div className="fileView">
                <div className="fileView__row">
                    {/* file card */}
                    {
                        file.slice(0,5).map(({id,item})=>(
                           <Filecard name={item.caption} />
                        ))
                    }
                </div>
                <div className="fileView__titles">
                    <div className="fileView__titles--left">
                        <p>Name</p>
                    </div>
                    <div className="fileView__titles--right">
                        <p>Last modified</p>
                        <p>File Size</p>
                    </div>
                </div>
                {/* files items */}
                {
                    file.map(({id,item})=>(
                      <Fileitems id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                    ))
                }
            </div>
    )
}
