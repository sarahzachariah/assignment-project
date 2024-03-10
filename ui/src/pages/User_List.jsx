import { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
// import { GridOptions } from 'ag-grid-community'
import "ag-grid-community/styles/ag-grid.css"
// import "ag-grid-community/styles/ag-theme-quartz.css"
import '@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css'

import '../css/user.css'
import { IxDivider } from '@siemens/ix-react'

function User_List() {
  const [count, setCount] = useState(0)
  const gridOptions = {
    columnDefs: [
        {
            field: 'type',
            headerName: 'Type',
            resizable: false,
            checkboxSelection: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            resizable: true,
            sortable: true,
            filter: true,
        },
        { 
            field: 'hwVersion', 
            headerName: 'HW version', 
            resizable: true 
        },
    ],
    rowData: [
        {
            type: 'Equipment',
            status: 'Normal',
            hwVersion: '2.0',
            checked: false,
        },
        {
            type: 'Positioner',
            status: 'Maintenance',
            hwVersion: '1.0',
            checked: true,
        },
        {
            type: 'Pressure sensor',
            status: 'Unknown',
            hwVersion: 'N/A',
            checked: false,
        },
    ],
    rowSelection: 'multiple',
    suppressCellFocus: true,
    checkboxSelection: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://colormind.io/list/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <h2 className='users-title'>Registered Users</h2>
    <hr className='divider'/>
    <div style={{ height: '12rem', width: '100%' }} className="ag-theme-quartz ag-theme-alpine-dark">
        <AgGridReact className="grid" gridOptions={gridOptions} />
    </div>
    </>
  )
}

export default User_List
