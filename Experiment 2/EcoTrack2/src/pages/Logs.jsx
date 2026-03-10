import { useDispatch,useSelector } from "react-redux";
import { fetchLogs } from "../store/logsSlice";
import { useEffect } from "react";

const Logs=()=>{
    const dispatch=useDispatch();
    const {data,status,error}=useSelector((state)=>state.Logs);

    useEffect(()=>{
        if(status=="idle"){
            dispatch(fetchLogs());
        }
    },[state,dispatch]);

    if(status=="failed"){
        return <p>Error:{error}</p>
    }
    if(status=="loading"){
        return <p>Loading Logs</p>
    }

    return (
        <div>
            <h2>Activity Logs</h2>
            <ul>
                {
                    data.map((log)=>{
                        <li key={log.id}>
                            {log.message}
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

export default Logs