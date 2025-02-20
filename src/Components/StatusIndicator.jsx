import React from 'react';

const StatusIndicator = ({ nutrition }) => {
    if (!nutrition) return null;
    
    let message = "Healthy Choice!";
    let bgColor = "bg-green-500";
    
    if (nutrition.nutriments.sugars > 10 || nutrition.nutriments.fat > 15) {
        message = "Unhealthy! High Sugar or Fat";
        bgColor = "bg-red-500";
    }
    
    return (
        <div className={`mt-4 p-4 text-white text-center rounded ${bgColor}`}>
            {message}
        </div>
    );
};

export default StatusIndicator;
