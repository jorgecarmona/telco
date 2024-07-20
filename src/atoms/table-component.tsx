import React from 'react';

interface TableComponentProps {
  columns: number;
  rows: number;
  columnTitles: string[];
}

function TableComponent({ columns, rows, columnTitles }: TableComponentProps) {
  return (
    <table>
      <thead>
        <tr>
          {columnTitles.map((colTitle, index) => (
            <th key={index}>{colTitle}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: columns }).map((_, colIndex) => (
              <td key={colIndex}>Cell {rowIndex + 1}-{colIndex + 1}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;