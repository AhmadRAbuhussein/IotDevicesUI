import React from "react";
import TableProps from "src/libs/componentsProps/tableProps";

interface TabListPropsProps {
    items: Array<ItemType>;
    allowScrollButtonsMobile?:boolean;
    scrollButtons?:boolean|"auto";
    customStyle?:React.CSSProperties
}

interface ItemType {
    value:string;
    label:string;
    component:React.ReactNode;
}
export default TabListPropsProps;
