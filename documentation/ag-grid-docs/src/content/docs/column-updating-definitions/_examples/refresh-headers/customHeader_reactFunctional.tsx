import React, { useRef } from 'react';
import { CustomHeaderProps } from "@ag-grid-community/react";

const CustomHeader = (props: CustomHeaderProps) => {
    const { enableMenu, displayName, showColumnMenu } = props;
    const menuButtonRef = useRef(null);

    console.log('CustomHeader rendered -> ' + displayName);

    return (
        <div style={{ display: 'flex' }}>
            {enableMenu && <div
                ref={menuButtonRef}
                className="ag-icon ag-icon-menu"
                onClick={() => showColumnMenu(menuButtonRef.current!)}>&nbsp;</div>}
            <div className="customHeaderLabel">{displayName}</div>
        </div>
    );
};

export default CustomHeader;
