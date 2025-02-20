// CameraScanner.jsx - Captures barcode using laptop camera
import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import Quagga from 'quagga';

const CameraScanner = ({ onScan }) => {
    const webcamRef = useRef(null);
    const [scanning, setScanning] = useState(false);

    const capture = useCallback(() => {
        if (!scanning) {
            setScanning(true);
            const imageSrc = webcamRef.current.getScreenshot();
            processBarcode(imageSrc);
        }
    }, [scanning]);

    const processBarcode = (imageSrc) => {
        Quagga.decodeSingle({
            decoder: { readers: ["ean_reader"] },
            locate: true,
            src: imageSrc,
        }, (result) => {
            if (result && result.codeResult) {
                onScan(result.codeResult.code);
            } else {
                alert("Barcode not detected. Try again.");
            }
            setScanning(false);
        });
    };

    return (
        <div className="flex flex-col items-center">
            <Webcam ref={webcamRef} screenshotFormat="image/png" className="rounded-lg shadow-md" />
            <button onClick={capture} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Scan Barcode</button>
        </div>
    );
};

export default CameraScanner;