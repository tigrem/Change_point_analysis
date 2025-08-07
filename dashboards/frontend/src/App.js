import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  ReferenceLine, ReferenceArea
} from 'recharts';
import { LucideLineChart, LucideGauge, LucideCalendarDays } from 'lucide-react';
import './index.css';

// Assume Tailwind CSS is configured in a parent index.html or build process.
// This example uses CDN for quick demo compatibility.
const App = () => {
  const [historicalData, setHistoricalData] = useState([]);
  const [keyEvents, setKeyEvents] = useState([]);
  const [changePoint, setChangePoint] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define the base URL for the Flask backend
  const API_BASE_URL = 'http://127.0.0.1:5000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all data in parallel
        const [pricesRes, eventsRes, changePointRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/historical_prices`),
          fetch(`${API_BASE_URL}/api/key_events`),
          fetch(`${API_BASE_URL}/api/change_point_results`)
        ]);

        if (!pricesRes.ok || !eventsRes.ok || !changePointRes.ok) {
          throw new Error('Failed to fetch data from one or more APIs.');
        }

        const pricesData = await pricesRes.json();
        const eventsData = await eventsRes.json();
        const changePointData = await changePointRes.json();

        // Process data for the chart
        const formattedPrices = pricesData.map(item => ({
          ...item,
          Date: item.Date.split(' ')[0], // Truncate time for cleaner labels
          Price: parseFloat(item.Price) // Ensure price is a number
        }));

        setHistoricalData(formattedPrices);
        setKeyEvents(eventsData);
        setChangePoint(changePointData);
      } catch (e) {
        console.error('API call failed:', e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500 bg-gray-100">
        <div className="text-xl">Loading dashboard data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 bg-red-50">
        <div className="text-xl">Error: {error}</div>
      </div>
    );
  }

  // Find the index of the change point date for highlighting on the chart
  const changePointIndex = historicalData.findIndex(d => d.Date === changePoint.date);
  const changePointPrice = historicalData[changePointIndex]?.Price;

  return (
    <div className="min-h-screen bg-gray-50 font-inter text-gray-800">
      <div className="container mx-auto p-4 md:p-8">
        {/* Header */}
        <header className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">Brent Oil Price Analysis Dashboard</h1>
          <p className="text-center text-lg text-gray-600">
            Visualizing historical trends and the impact of the change point event.
          </p>
        </header>

        {/* Key Indicators */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
            <LucideCalendarDays size={48} className="text-blue-500 mb-3" />
            <p className="text-xl font-semibold text-gray-600 mb-1">Change Point Date</p>
            <p className="text-3xl font-bold text-gray-900">{changePoint.date}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
            <LucideLineChart size={48} className="text-green-500 mb-3" />
            <p className="text-xl font-semibold text-gray-600 mb-1">Volatility Increase</p>
            <p className="text-3xl font-bold text-gray-900">
              {changePoint.prob_sigma_increase}%
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
            <LucideGauge size={48} className="text-yellow-500 mb-3" />
            <p className="text-xl font-semibold text-gray-600 mb-1">Volatility Shift (Before/After)</p>
            <p className="text-3xl font-bold text-gray-900">
              {changePoint.sigma_before} → {changePoint.sigma_after}
            </p>
          </div>
        </section>

        {/* Main Chart */}
        <section className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Historical Brent Oil Prices</h2>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart
              data={historicalData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line type="monotone" dataKey="Price" stroke="#4B5563" activeDot={{ r: 8 }} />

              {/* Highlight the change point date */}
              {changePointIndex !== -1 && (
                <>
                  <ReferenceLine x={changePoint.date} stroke="#EF4444" strokeDasharray="5 5" label="Change Point" />
                  <ReferenceArea
                    x1={changePoint.date}
                    x2={historicalData[historicalData.length - 1].Date}
                    fill="#EF4444"
                    fillOpacity={0.1}
                    label="Post-Change"
                  />
                </>
              )}

              {/* Highlight key events */}
              {keyEvents.map((event, index) => {
                const eventDate = event.Date.split(' ')[0];
                const eventDataPoint = historicalData.find(d => d.Date === eventDate);
                return eventDataPoint ? (
                  <ReferenceLine
                    key={index}
                    x={eventDate}
                    stroke="#F59E0B"
                    strokeDasharray="3 3"
                    label={{
                      value: event.Event,
                      position: 'top',
                      fill: '#F59E0B',
                      fontSize: 12,
                      offset: -10
                    }}
                  />
                ) : null;
              })}

            </LineChart>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default App;
