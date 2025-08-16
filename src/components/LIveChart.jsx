// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// function LiveChart() {
//   const [data, setData] = useState([]);
//   const [previousPrice, setPreviousPrice] = useState(null);
//   const [currentPrice, setCurrentPrice] = useState(null);
//   const intervalRef = useRef(null);

//   const isBetweenTradingHours = () => {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();

//     const totalMinutes = hours * 60 + minutes;
//     return totalMinutes >= (9 * 60 + 15) && totalMinutes <= (15 * 60 + 15);
//   };

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         if (!isBetweenTradingHours()) return; // Market band hai to skip fetch

//         const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=d00sv8hr01qv3oh19vg0d00sv8hr01qv3oh19vgg`);
//         const price = response.data.c;
//         const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//         setPreviousPrice(currentPrice);
//         setCurrentPrice(price);

//         setData(prevData => [...prevData.slice(-19), { time, price }]);
//       } catch (error) {
//         console.error("Error fetching stock data", error);
//       }
//     };

//     fetchStockData();
//     intervalRef.current = setInterval(fetchStockData, 5000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const getLineColor = () => {
//     if (previousPrice == null || currentPrice == null) return '#8884d8';
//     return currentPrice > previousPrice ? '#4ade80' : '#f87171';
//   };

//   return (
//     <section className="p-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl">
//       <h2 className="text-4xl font-bold text-center mb-6">Intraday Chart - AAPL (9:15 to 3:15)</h2>

//       <div className="flex justify-center items-center mb-6">
//         <div className={`text-3xl font-bold ${currentPrice > previousPrice ? 'text-green-400' : 'text-red-400'} transition-all duration-500`}>
//           ${currentPrice ? currentPrice.toFixed(2) : 'Loading...'}
//         </div>
//       </div>

//       <div className="h-96">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#555" />
//             <XAxis dataKey="time" tick={{ fill: '#ccc' }} />
//             <YAxis domain={['auto', 'auto']} tick={{ fill: '#ccc' }} />
//             <Tooltip
//               contentStyle={{ backgroundColor: '#333', borderColor: '#555', color: '#fff' }}
//               labelStyle={{ color: '#aaa' }}
//             />
//             <Line
//               type="monotone"
//               dataKey="price"
//               stroke={getLineColor()}
//               strokeWidth={3}
//               dot={{ r: 4 }}
//               isAnimationActive={true}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </section>
//   );
// }

// export default LiveChart;
