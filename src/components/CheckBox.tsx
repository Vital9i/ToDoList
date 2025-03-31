import React, {ChangeEvent} from 'react';

type CheckBoxProps={
    isDone:boolean
    updateCheckBox:(newBooked:boolean)=>void
}
export const CheckBox = ({isDone,updateCheckBox}:CheckBoxProps) => {
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        updateCheckBox(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={isDone} onChange={onChangeHandler}/>
    );
};

