import {Grid} from "@mui/material";
import { useSearchDevicesQuery } from "src/data/devices";
import DevicesTable from "./components/devicesTable";

const Devices = () => {
    const {data, isFetching} = useSearchDevicesQuery()
    return (
        <Grid item container xs={12} direction='column' gap='1.5rem'>
            <Grid item marginBottom={"5rem"}>
                <DevicesTable
                    data={data}
                    isLoading={isFetching}
                />
            </Grid>
        </Grid>
    )
}
export default Devices