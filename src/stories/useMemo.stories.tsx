import {useState} from "react";

export default {
    title: 'useMemo',
}

export const Example = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)
    let resultForA = 1;
    let resultForB = 1;

    for (let i =2; i<=a; i++) {
        resultForA *=i;
    }
    for (let i =2; i<=b; i++) {
        resultForB *=i;
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <div>
            Result fo a: {resultForA}
        </div>
        <div>
            Result fo b: {resultForB}
        </div>
    </>
}