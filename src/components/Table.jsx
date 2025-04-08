import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import pen from '../assets/pen.png';
import { useChangeData, useDataContext } from '../DataProvider';

export default function Table() {
  const data = useDataContext();
  const changeDataContext = useChangeData();
  const [editRowId, setEditRowId] = useState(null);
  const [editedRow, setEditedRow] = useState({});

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditedRow({ ...row });
  };

  const handleSaveClick = () => {
    changeDataContext(editedRow);
    setEditRowId(null);
  };

  const handleChange = (e, key) => {
    setEditedRow({ ...editedRow, [key]: e.target.value });
  };

  const columns = [
    {
      name: 'Customer Name',
      selector: (row) => row.name,
      cell: (row) =>
        editRowId === row.id ? (
          <input
            value={editedRow.name}
            onChange={(e) => handleChange(e, 'name')}
            className="border px-2 py-1 rounded"
          />
        ) : (
          row.name
        ),
      sortable: true,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
      cell: (row) =>
        editRowId === row.id ? (
          <input
            value={editedRow.company}
            onChange={(e) => handleChange(e, 'company')}
            className="border px-2 py-1 rounded"
          />
        ) : (
          row.company
        ),
    },
    {
      name: 'Order Value',
      selector: (row) => row.orderValue,
      cell: (row) =>
        editRowId === row.id ? (
          <input
            value={editedRow.orderValue}
            onChange={(e) => handleChange(e, 'orderValue')}
            className="border px-2 py-1 rounded"
          />
        ) : (
          row.orderValue
        ),
    },
    {
      name: 'Order Date',
      selector: (row) => row.orderDate,
      cell: (row) =>
        editRowId === row.id ? (
          <input
            value={editedRow.orderDate}
            onChange={(e) => handleChange(e, 'orderDate')}
            className="border px-2 py-1 rounded"
          />
        ) : (
          row.orderDate
        ),
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      cell: (row) =>
        editRowId === row.id ? (
          <select
            value={editedRow.status}
            onChange={(e) => handleChange(e, 'status')}
            className="border px-2 py-1 rounded"
          >
            <option value="New">New</option>
            <option value="In-progress">In-progress</option>
            <option value="Completed">Completed</option>
          </select>
        ) : (
          row.status
        ),
    },
    {
      name: 'Actions',
      cell: (row) =>
        editRowId === row.id ? (
          <button
            onClick={handleSaveClick}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <img
            onClick={() => handleEditClick(row)}
            src={pen}
            className="w-5 h-5"
            alt=""
          />
        ),
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        striped
        highlightOnHover
        pointerOnHover
        responsive
        selectableRows
      />
    </div>
  );
}