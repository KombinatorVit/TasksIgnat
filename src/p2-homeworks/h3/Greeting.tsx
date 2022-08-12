import React, {ChangeEvent} from 'react';
import s from './Greeting.module.css';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix
    addUser: () => void // need to fix any
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, onEnter, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput :s.input

    return (
        <div className={s.greeting}>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>

            <button onClick={addUser}
                    className={s.button}
                    disabled={!name}>add
            </button>
            <span className={s.count}>{totalUsers}</span>
        </div>
    );
};

export default Greeting;
