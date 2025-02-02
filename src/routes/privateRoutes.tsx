import {Route, Routes} from "react-router-dom";
import {PanelLayout} from "src/layouts";
import PrivateProtection from "./privateProtection";
import Jobs from "src/pages/devices";
import DeviceData from "src/pages/deviceData";

const Component = () => {
    return (
        <Routes>
            <Route element={<PrivateProtection/>}>
                <Route element={<PanelLayout/>}>
                    <Route path={'/devices'} element={<Jobs/>}/>
                    <Route path={'/deviceData/:id'} element={<DeviceData/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default Component;
