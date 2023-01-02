import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const Counter = (props: { counter: number }) => {
    console.log('counter rendered')
    return <div>{props.counter}</div>
}
const User = React.memo((props: { users: Array<string> }) => {
    console.log('user rendered')
    return <div>{props.users.map((user, i) => {
        return <div key={i}>
            {user}
        </div>
    })
    }
    </div>

})
const UserM = React.memo(User)
export const Example = () => {
    console.log('example rendered')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alex', 'Dimich', 'Barsik'])

    const counterHandler = () => {
      setCounter(counter + 1)
    }
    const usersHandler = () => {
      setUsers([...users, 'Sveta' + new Date().getTime()])
    }
    return <>
        <button onClick={counterHandler}>+</button>
        <button onClick={usersHandler}>Add</button>
        <Counter counter={counter}/>
        <User users={users}/>
    </>
}