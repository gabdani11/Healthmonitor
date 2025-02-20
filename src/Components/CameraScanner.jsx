import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';

const CameraScanner = ({ onScan }) => {
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        if (scanning) {
            console.log("Initializing QuaggaJS...");

            Quagga.init({
                inputStream: {
                    type: "LiveStream",
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: "environment" // Use laptop camera
                    },
                    target: document.querySelector("#scanner-container"),
                },
                decoder: {
                    readers: ["ean_reader", "upc_reader"], // Barcode types
                },
            }, function (err) {
                if (err) {
                    console.error("QuaggaJS Init Error:", err);
                    return;
                }
                console.log("QuaggaJS Initialized ✅");
                Quagga.start();
            });

            Quagga.onDetected((data) => {
                console.log("Barcode detected:", data.codeResult.code);
                onScan(data.codeResult.code);
                setScanning(false);
                Quagga.stop();
            });

            Quagga.onProcessed((result) => {
                if (result) {
                    console.log("Processing frame...");
                }
            });
        }

        return () => {
            if (scanning) {
                Quagga.stop();
                console.log("QuaggaJS Stopped");
            }
        };
    }, [scanning, onScan]);

    return (
        <div className="flex flex-col items-center">
            <div id="scanner-container" className="w-full h-64 border rounded shadow"></div>
            {!scanning ? (
                <button
                    onClick={() => setScanning(true)}
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                >
                    Start Scanning
                </button>
            ) : (
                <button
                    onClick={() => setScanning(false)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
                >
                    Stop Scanning
                </button>
            )}
        </div>
    );
};

export default CameraScanner;
