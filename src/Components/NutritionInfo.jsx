// NutritionInfo.jsx - Fetches and displays nutrition data
import React, { useState } from 'react';

const NutritionInfo = ({ barcode }) => {
    const [nutrition, setNutrition] = useState(null);

    React.useEffect(() => {
        if (barcode) {
            fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
                .then(res => res.json())
                .then(data => {
                    if (data.status === 1) {
                        setNutrition(data.product);
                    } else {
                        alert("Product not found.");
                    }
                });
        }
    }, [barcode]);

    return (
        <div className="mt-6 p-4 border rounded shadow">
            {nutrition ? (
                <div>
                    <h2 className="text-xl font-bold">{nutrition.product_name}</h2>
                    <p>Calories: {nutrition.nutriments.energy_kcal} kcal</p>
                    <p>Sugar: {nutrition.nutriments.sugars}g</p>
                    <p>Fat: {nutrition.nutriments.fat}g</p>
                    <p>Protein: {nutrition.nutriments.proteins}g</p>
                </div>
            ) : <p>No data available.</p>}
        </div>
    );
};

export default NutritionInfo;