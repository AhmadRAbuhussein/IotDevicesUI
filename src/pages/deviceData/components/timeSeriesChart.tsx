import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SearchDeviceDataModel } from 'types/deviceData';
import { useSearchDeviceDataQuery } from 'data/devices';

interface IProps {
  id: string
}

const TimeSeriesChart = ({id}:IProps) => {
  const { data, isFetching } = useSearchDeviceDataQuery(
    { deviceId: id ?? "" },
    {
      pollingInterval: 3000,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );
  return (
    <div style={{width: "100%", height: 400}}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="timestamp"
            tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second:"2-digit"
            })}
          />
          <YAxis domain={["auto", "auto"]}/>
          <Tooltip/>
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimeSeriesChart;