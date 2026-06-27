import { useState } from "react";

export default function ww3() {
    let [count, setCount] = useState(1);
    return (
        <>
            <button className="bg-white text-black p-5 m-auto" onClick={() => setCount(count + 1)}>{count}</button>
        </>
    )
}
