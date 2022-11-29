import React from 'react';

const ConfrimationModal = ({ title, message, closeModle, successAction, modleData, successName }) => {
    return (
        <div>
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modleData)} htmlFor="confirmationModal" className="btn">{successName}</label>
                        <label onClick={closeModle} className="btn btn-outline">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfrimationModal;