import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const HeartMonitor = () => {
    const [data, setData] = useState([]);
    const [heartRate, setHeartRate] = useState(0);

    
    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://your_server_ip:5000/heartbeat")
                .then((res) => res.json())
                .then((data) => {
                    setHeartRate(data.heartRate);

                    setData((prev) => [
                        ...prev.slice(-20), 
                        { time: new Date().toLocaleTimeString(), bpm: data.heartRate },
                    ]);
                });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    
    const getHeartRateStatus = () => {
        if (heartRate < 60) return { label: "Resting", color: "text-blue-500" };
        if (heartRate < 100) return { label: "Normal", color: "text-green-500" };
        if (heartRate < 120) return { label: "Elevated", color: "text-yellow-500" };
        return { label: "High", color: "text-red-500" };
    };

    const { label, color } = getHeartRateStatus();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            
            <div className="bg-white shadow-lg rounded-xl p-6 text-center w-full max-w-xs sm:max-w-md md:max-w-lg">
                <h2 className="text-2xl font-semibold">Heart Rate</h2>
                <div className="text-5xl font-bold my-2 animate-pulse">{heartRate} BPM</div>
                <div className={`text-lg font-medium ${color}`}>{label}</div>
            </div>

            
            <div className="mt-6 bg-white p-4 rounded-xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg">
                <h2 className="text-xl font-semibold mb-2 text-center">Heart Rate Over Time</h2>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <XAxis dataKey="time" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Line type="monotone" dataKey="bpm" stroke="#FF6347" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            
            <div className="mt-6 text-gray-500 text-sm text-center">
                &copy; {new Date().getFullYear()} Daniel. All rights reserved.
            </div>
        </div>
    );
};

export default HeartMonitor;
