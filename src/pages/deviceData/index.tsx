import {Grid} from "@mui/material";
import { useParams } from "react-router-dom";
import { useSearchDeviceDataQuery } from "src/data/devices";
import DeviceDataTable from "./components/deviceDataTable";

const DeviceData = () => {
    let { id } = useParams();
    const {data, isFetching} = useSearchDeviceDataQuery({deviceId: id ?? ""})
    return (
        <Grid item container xs={12} direction='column' gap='1.5rem'>
            <Grid item marginBottom={"5rem"}>
                <DeviceDataTable
                    deviceId={id}
                    data={data}
                    isLoading={isFetching}
                />
            </Grid>
        </Grid>
    )
}
export default DeviceData;