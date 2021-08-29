import React from 'react'
import '../componentcss/InputOption.css'

function InputOption({title, Icon, color }) {
    return (
        <div className="inputOption">
            <Icon className="inputicon" style={{color: color}}/>
            <h4 className="input__text text-muted">{title}</h4>
        </div>
    )
}

export default InputOption
