// import './App.css';
// import { useEffect, useState } from 'react';
// import Viewer from './component/Viewer';
// import Controller from './component/Controller';

// function App() {
//   const [count, setCount] = useState(0);
//   const handleSetCount = (value) => {
//     setCount (count + value);
//   };

//   return(
//     <div className="App">
//       <h1>간단한 계수기</h1>
//       <section>
//         <Viewer count={count} />
//       </section>
//       <section>
//         <Controller handleSetCount={handleSetCount} />
//       </section>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { useState } from 'react';
import axios from 'axios';
import NewsList from './ch18weather/NewList';

function App() {
//   const [data, setData] = useState(null);
//   const onClick = async() => {
//     try {
//       const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-0501&sortBy=publishedAt&apiKey=8dbfc9ae24f844d2bb9fd848cf3b90ba')
//       setData(response.data);
//     }
//     catch(e){
//       console.error(e);
//     }
//   }
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} cols={100} value={JSON.stringify(data, null, 2)}/>}
//     </div>
//   );
return <NewsList />
 };
export default App;
