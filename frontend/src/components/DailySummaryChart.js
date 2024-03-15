// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const DailySummaryChart = ({ dailySummary }) => {
//   const data = {
//     labels: ['Messages', 'Posts', 'Replies', 'Followers gained'],
//     datasets: [
//       {
//         label: 'Daily Summary',
//         data: [dailySummary.messages, dailySummary.posts, dailySummary.replies, dailySummary.followersGained],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return <Bar data={data} options={options} />;
// };

// export default DailySummaryChart;