import React from 'react';

const LauncherModal = ({libelleBtn, target}) => {
    return (
        <>
            <button type="button" className="btn btn-primary btn-ColorA marginLaunchLogin" data-bs-toggle="modal" data-bs-target={`#${target}`} key={target}>
                {libelleBtn}
            </button>
        </>
    );
};

export default LauncherModal;