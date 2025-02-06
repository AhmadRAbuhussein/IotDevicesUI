import {Grid} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSearchDeviceDataQuery } from "src/data/devices";
import DeviceDataTable from "./components/deviceDataTable";
import TimeSeriesChart from 'src/pages/deviceData/components/timeSeriesChart';

const DeviceData = () => {
  let { id } = useParams();

  const { data, isFetching } = useSearchDeviceDataQuery(
    { deviceId: id ?? "" },
    {
      pollingInterval: 5000,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  return (
    <Grid item container xs={12} direction='column' gap='1.5rem'>
      <Grid item marginBottom={"5rem"}>
        <TimeSeriesChart
          id={id ?? ""}
        />
        <DeviceDataTable
          deviceId={id}
          data={data}
          isLoading={isFetching}
        />
      </Grid>
    </Grid>
  );
};
export default DeviceData;
