// // src/components/RecommendationForm.js
// import React, { useState } from 'react';

// const RecommendationForm = ({ onRecommend }) => {
// const [interest, setInterest] = useState('');

// const handleSubmit = (e) => {
//     e.preventDefault();
//     onRecommend(interest);
// };

// return (
//     <form onSubmit={handleSubmit}>
//     <label>
//         Enter your interest:
//         <input
//         type="text"
//         value={interest}
//         onChange={(e) => setInterest(e.target.value)}
//         />
//     </label>
//     <button type="submit">Recommend Events</button>
//     </form>
// );
// };

// export default RecommendationForm;
