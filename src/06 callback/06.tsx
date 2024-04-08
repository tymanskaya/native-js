import React, {ChangeEvent, MouseEvent} from "react";
// const callback=()=>{
//     alert('hello')
// }
// window.setTimeout (callback, 1000)

export const User =()=>{
    const deleteUser=(event: MouseEvent<HTMLButtonElement>)=>{
        alert(event.currentTarget.name)
    }
    const searchUser=(event: MouseEvent<HTMLButtonElement>)=>{
        alert(event.currentTarget.name)
    }
    const saveUser =()=>{
        alert('save new user')
    }
    const onNameChanged=()=>{
        console.log('name changed')
    }
    const onAgeChanged=(event: ChangeEvent<HTMLInputElement> )=>{
        console.log('name changed'+ event.currentTarget.value)
    }

    const focusLostHandler=()=>{
        console.log('focusLost handler')
    }
    return (
        <div>
            <textarea onChange={onNameChanged}
                      onBlur={focusLostHandler}>Dimuch</textarea>
            <input type='number' onChange={onAgeChanged}/>
            <button name='delete' onClick={deleteUser}>x</button>
            <button name='save' onClick={deleteUser}>x</button>
            <button name='save' onClick={searchUser}>SEARCH</button>
        </div>
    )

}