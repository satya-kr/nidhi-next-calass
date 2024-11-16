// "use client"

// import Details from "@/components/Details";
// import { useState } from "react";

// export default function Home() {

//   const [count, setCount] = useState(1);
//   const [price, setPrice] = useState(100);

//   const handleIncreses = () => setCount(count + 1);

//   const handleDesrease = () => {
//     if(count > 1) {
//       setCount(count - 1);
//     }
//   }

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1>Welcome Gone Nidhi</h1>
//       Price: {price * count}
//       <button onClick={handleIncreses}>+</button>
//       <input type="text" readOnly value={count} />
//       <button onClick={handleDesrease} disabled={count === 1}>-</button>

//       <Details data={{
//         price: price * count,
//         name: `Dress x ${count}`,
//       }} />
//     </main>
//   );
// }


"use client"
import { useState } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    </main>
  );
}
