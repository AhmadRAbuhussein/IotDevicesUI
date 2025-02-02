import React from "react";

interface TabsProps {
    value: any;
    onChange: (event: React.SyntheticEvent, newValue: any) => void;
    items: Array<ItemType>;
    allowScrollButtonsMobile?:boolean;
    scrollButtons?:boolean|"auto";
    option?: number;
    customStyle?:React.CSSProperties
}
type ItemType = {
    value: string|number;
    label: string;
    component?:React.FC;
}
export default TabsProps;