import React from "react";
import { temperature_historyType } from "../../Types/types";
import TempHistoryTable from "./Table/TempHistorytable";

export default function TempHistory({
  tempHistory,
}: temperature_historyType | any) {
  return (
    <div className="temp-history-wrapper">
      <div className="temp-history-wrapper-forcast">
        <TempHistoryTable
          title="Forcast"
          high={tempHistory.forcast.high}
          low={tempHistory.forcast.low}
        />
        <TempHistoryTable
          title="Average"
          high={tempHistory.average.high}
          low={tempHistory.average.low}
        />
        <TempHistoryTable
          title="Last Year"
          high={tempHistory.last_yr.high}
          low={tempHistory.last_yr.low}
        />
      </div>
    </div>
  );
}
