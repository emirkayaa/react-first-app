
import { useEffect,useState } from "react";
function Home() {
    const [count,setCount] = useState(0)
    useEffect(() => {
        console.log('her güncellediğinde çalışır');
    })
    useEffect(() => {
        console.log('her güncellediğinde çalışır');
       
    })
    useEffect(() => {
        console.log('İLK YÜKLEWNDİĞİNDE çalışır');
        return () => {
            console.log('destroy oldu')
        }
    }, [] )
    return (
        <div>
           <div>
                <h1>{count}</h1>
                <button onClick={() =>setCount( count => count + 1)}>Arttır</button>
                <hr/>
           </div>
        </div>
    )
}

export default Home