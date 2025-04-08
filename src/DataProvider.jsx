import React, { useState, useEffect } from 'react';

const SetData = React.createContext();
const AddRow = React.createContext();
const DataContext = React.createContext();
const ChangeData = React.createContext();

export const useSetData = () => {
    const context = React.useContext(SetData);
    if (context === undefined) {
        throw new Error('useSetData must be used within a DataProvider');
    }
    return context;
}

export const useAddRow = () => {
    const context = React.useContext(AddRow);
    if (context === undefined) {
        throw new Error('useAddRow must be used within a DataProvider');
    }
    return context;
}

export const useDataContext = () => {
    const context = React.useContext(DataContext);
    if (context === undefined) {
        throw new Error('useDataContext must be used within a DataProvider');
    }
    return context;
}

export const useChangeData = () => {
    const context = React.useContext(ChangeData);
    if (context === undefined) {
        throw new Error('useChangeData must be used within a DataProvider');
    }
    return context;
}

export default function DataProvider({ children }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://67da34cd35c87309f52b67a2.mockapi.io/customer')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    const addRow = (row) => {
        addData(row);
    }

    async function addData(row) {
        const response = await fetch('https://67da34cd35c87309f52b67a2.mockapi.io/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(row),
        });
        const result = await response.json();
        setData((prev) => [...prev, result]);
        alert('Row added successfully!');
    }

    async function changeData(row) {
        const response = await fetch(`https://67da34cd35c87309f52b67a2.mockapi.io/customer/${row.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(row),
        });
        const result = await response.json();
        setData((prev) => prev.map((item) => (item.id === row.id ? result : item)));
        alert('Row updated successfully!');
    }

    return (
        <SetData.Provider value={setData}>
            <AddRow.Provider value={addRow}>
                <DataContext.Provider value={data}>
                    <ChangeData.Provider value={changeData}>
                    {children}
                    </ChangeData.Provider>
                </DataContext.Provider>
            </AddRow.Provider>
        </SetData.Provider>
    )
}