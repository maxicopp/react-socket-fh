import React from 'react';

export const OutgoingMessage = ({ msg }) => {
    const { mensaje } = msg;
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{mensaje}</p>
                <span className="time_date"> 11:01 AM | June 9</span>
            </div>
        </div>
    )
}
