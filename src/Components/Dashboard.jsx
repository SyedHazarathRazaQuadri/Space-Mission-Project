import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import './Dashboard.css';
import Charts from './Charts/Charts';
import NavBar from './Navigation/NavBar';

function Dashboard() {
    const [colDefs, setColDefs] = useState([
        { field: "mission" },
        { field: "company" },
        { field: "location" },
        { field: "date" },
        { field: "time" },
        { field: "rocket" },
        { field: "price" },
        { field: "successful" }
      ]);
      const [rowData, setRowData] = useState([]);
    useEffect(()=>{
        const dataHandler = async() =>{
            const response = await fetch('https://www.ag-grid.com/example-assets/space-mission-data.json');
            const newData = await response.json();
            setRowData(newData);
        }
        dataHandler();
    }, [])
  return (
    <div>
      <NavBar />
      <div style={{fontWeight: 'bold', fontSize: '30px', padding: '1rem'}}>SpaceVue Dashboard</div>
      <Charts />
      <div className="ag-theme-quartz" style={{ height: 620 }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  )
}

export default Dashboard
