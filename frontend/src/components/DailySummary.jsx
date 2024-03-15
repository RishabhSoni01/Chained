// import React, { useEffect, useState } from 'react';
// import { useRecoilValue } from 'recoil';
// import userAtom from "../atoms/userAtom";


// const DailySummary = () => {
//   const [summary, setSummary] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const user = useRecoilValue(userAtom);

//   useEffect(() => {
//     const fetchSummary = async () => {
//       try {
//         const res = await fetch('/api/users/daily-summary', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${user.token}`,
//           },
//         });
//         const data = await res.json();
//         if (data.error) {
//           console.error(data.error);
//           return;
//         }
//         setSummary(data.dailySummary);
//       } catch (error) {
//         console.error('Error fetching daily summary:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) {
//       fetchSummary();
//     }
//   }, [user]);

//   return (
//     <div>
//       <h2>Daily Summary</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <p>Messages: {summary.messages}</p>
//           <p>Posts: {summary.posts}</p>
//           <p>Replies: {summary.replies}</p>
//           <p>Followers gained: {summary.followersGained}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DailySummary;