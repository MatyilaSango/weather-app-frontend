import React from "react";
import "./SunriseSunsetTable.css";
import "./TempHistorytable.css"

interface props {
    title: String,
    high: String,
    low: String
}

export default function TempHistoryTable({title, high, low }: props| any) {

  return (
    <div className="temp-history-table-wrapper">
      <div className="head">
        <span>{title}</span>
      </div>
      <div className="table-wrapper">
        <table>
          <tbody>
            <tr>
              <td>High</td>
              <td>{high}</td>
            </tr>
            <tr>
              <td>Low</td>
              <td>{low}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
