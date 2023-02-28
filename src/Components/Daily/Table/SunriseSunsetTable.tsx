import React from "react";
import { sunriseSunsetType } from "../../../Types/types";
import "./SunriseSunsetTable.css";

export default function SunriseSunsetTable({
  duration,
  rise,
  set
}: sunriseSunsetType | any) {

  return <div className="table-wrapper">
    <table>
      <tbody>
        <tr>
          <td>Duration</td>
          <td>{duration}</td>
        </tr>
        <tr>
          <td>Rise</td>
          <td>{rise}</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>{set}</td>
        </tr>
      </tbody>
    </table>
  </div>;
}
