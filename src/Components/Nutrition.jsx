import React, { useState } from "react";
import CameraScanner from "./CameraScanner";
import NutritionInfo from "./NutritionInfo";
import StatusIndicator from "./StatusIndicator";


const Nutrition = () => {
    const [barcode, setBarcode] = useState("");

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Nutrition Scanner</h1>
            <CameraScanner onScan={setBarcode} />
            {barcode && <NutritionInfo barcode={barcode} />}
            {barcode && <StatusIndicator nutrition={barcode} />}
        </div>
    );
};

export default Nutrition;
