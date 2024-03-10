import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
// import { GridOptions } from 'ag-grid-community'
import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-quartz.css"
import "@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css";

import { IxButton, IxMessageBar } from "@siemens/ix-react";

function Users() {
    const apiBaseUrl = "https://d2d47ezagao0kf.cloudfront.net/api/";
    const [apiMessage, setApiSuccess] = useState(null);
    const [rowData, setRowData] = useState(0);
    const [columnDefs, setColumnDefs] = useState(0);
    const [selectedRows, setSelectedRows] = useState(0);
    let gridApi;

    const gridOptions = {
        // Enable selection
        rowSelection: "single",
        // Event listener for selection change
        onSelectionChanged: handleSelectionChanged,
    };

    const fetchData = () => {
        try {
            // setData(null);
            const response = fetch(
                apiBaseUrl + "user"
            )
                .then((res) => {
                    setColumnDefs(0);
                    setRowData(0);
                    return res.json();
                })
                .then((res) => {
                    setColumnDefs(res.columnDefs);
                    setRowData(res.rowData);
                    console.log(res);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log("i fire once");
    }, []);

    function handleSelectionChanged() {
        const selectedRows = gridApi.getSelectedRows();
        if (selectedRows.length > 0) {
            setSelectedRows(selectedRows[0]);
        }
    }

    function onGridReady(params) {
        gridApi = params.api;
    }

    const updateUser = (e) => {
        e.preventDefault();
        console.log(selectedRows);
        try {
            const response = fetch(
                apiBaseUrl + "update",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "no-cors",
                    body: selectedRows,
                }
            )
                .then((response) => {
                    return response.text();
                })
                .then((response) => {
                    setApiSuccess(response);
                    console.log(response);
                });
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteUser = (e) => {
        e.preventDefault();
        console.log(selectedRows["id"]);
        let id = selectedRows["id"] ?? 0;
        try {
            const response = fetch(
                apiBaseUrl + "delete?id=" +
                    id,
                {
                    mode: "no-cors",
                }
            )
                .then((response) => {
                    return response.text();
                })
                .then((response) => {
                    setApiSuccess(response);
                    window.location.reload();
                });
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <h2 className="users-title">Registered Users</h2>
            <hr className="divider" />
            {/* <div>{gridOptions.rowSelection}</div> */}
            <div className="button-wrapper">
                {/* <IxButton className="update" variant="secondary" onClick={updateUser}>
          Update
        </IxButton> */}
                <IxButton
                    className="del"
                    variant="secondary"
                    onClick={deleteUser}
                >
                    Delete
                </IxButton>
            </div>
            <div
                style={{ height: "20rem", width: "100%" }}
                className="ag-theme-quartz ag-theme-alpine-dark"
            >
                <AgGridReact
                    className="grid"
                    rowData={rowData}
                    columnDefs={columnDefs}
                    rowSelection={"single"}
                    suppressCellFocus={true}
                    checkboxSelection={true}
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}
                />
            </div>
        </>
    );
}

export default Users;
