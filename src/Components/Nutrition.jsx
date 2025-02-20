import React, { useState } from "react";

const Nutrition = () => {
  const [foodItem, setFoodItem] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");
  const [logs, setLogs] = useState([]);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newLog = { foodItem, calories, protein, carbs, fat };
    setLogs([...logs, newLog]);

    
    setFoodItem("");
    setCalories("");
    setProtein("");
    setCarbs("");
    setFat("");
  };

  
  const calculateTotalNutrients = (type) => {
    return logs.reduce((total, log) => total + Number(log[type] || 0), 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Nutrition Log</h2>

      
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2 md:flex md:items-center">
          <label htmlFor="foodItem" className="block text-gray-700 font-bold mb-2 md:mb-0 md:w-1/4">
            Food Item:
          </label>
          <input
            type="text"
            id="foodItem"
            value={foodItem}
            onChange={(e) => setFoodItem(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>

        <div className="mb-2 md:flex md:items-center">
          <label htmlFor="calories" className="block text-gray-700 font-bold mb-2 md:mb-0 md:w-1/4">
            Calories:
          </label>
          <input
            type="number"
            id="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>

        <div className="mb-2 md:flex md:items-center">
          <label htmlFor="protein" className="block text-gray-700 font-bold mb-2 md:mb-0 md:w-1/4">
            Protein (g):
          </label>
          <input
            type="number"
            id="protein"
            value={protein}
            onChange={(e) => setProtein(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>

        <div className="mb-2 md:flex md:items-center">
          <label htmlFor="carbs" className="block text-gray-700 font-bold mb-2 md:mb-0 md:w-1/4">
            Carbs (g):
          </label>
          <input
            type="number"
            id="carbs"
            value={carbs}
            onChange={(e) => setCarbs(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>

        <div className="mb-2 md:flex md:items-center">
          <label htmlFor="fat" className="block text-gray-700 font-bold mb-2 md:mb-0 md:w-1/4">
            Fat (g):
          </label>
          <input
            type="number"
            id="fat"
            value={fat}
            onChange={(e) => setFat(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full md:w-auto flex items-center justify-center"
        >
          Add Food
        </button>
      </form>

      
      <h3 className="text-xl font-bold mb-2">Log Entries:</h3>
      {logs.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Food Item</th>
                <th className="border border-gray-300 px-4 py-2">Calories</th>
                <th className="border border-gray-300 px-4 py-2">Protein (g)</th>
                <th className="border border-gray-300 px-4 py-2">Carbs (g)</th>
                <th className="border border-gray-300 px-4 py-2">Fat (g)</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-b border-gray-300">
                  <td className="border border-gray-300 px-4 py-2">{log.foodItem}</td>
                  <td className="border border-gray-300 px-4 py-2">{log.calories}</td>
                  <td className="border border-gray-300 px-4 py-2">{log.protein}</td>
                  <td className="border border-gray-300 px-4 py-2">{log.carbs}</td>
                  <td className="border border-gray-300 px-4 py-2">{log.fat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      
      {logs.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Daily Totals:</h3>
          <p>Total Calories: {calculateTotalNutrients("calories")}</p>
          <p>Total Protein: {calculateTotalNutrients("protein")} g</p>
          <p>Total Carbs: {calculateTotalNutrients("carbs")} g</p>
          <p>Total Fat: {calculateTotalNutrients("fat")} g</p>
        </div>
      )}
    </div>
  );
};

export default Nutrition;
