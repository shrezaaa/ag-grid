import React from 'react';
import { CustomNoRowsOverlayProps } from '@ag-grid-community/react';

export default (props: CustomNoRowsOverlayProps & { noRowsMessageFunc: () => string }) => {
    return (
        <div role="presentation" className="ag-overlay-loading-center" style={{ backgroundColor: '#b4bebe', height: '9%' }}>
            <i className="far fa-frown" aria-live="polite" aria-atomic="true"> {props.noRowsMessageFunc()}</i>
        </div>
    );
};
