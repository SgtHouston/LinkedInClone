import React, { useState }  from 'react'
import '../componentcss/InputOption.css'

function InputOption({title, Icon, color }) {

    const [iconClick, setIconClick] = useState(false)
    const [inputIcon, setInputIcon] = useState('inputicon')
    const handleIconClick = () => {
        
        
        setIconClick(!iconClick)
        if (iconClick && (title === 'Like')){
            setInputIcon('inputicon2')
        } else {
            setInputIcon('inputicon')
        }
    }

    return (
        <div className="inputOption">
            <Icon className={inputIcon} style={{color: color}} onClick={handleIconClick} />
            <h4 className="input__text text-muted">{title}</h4>
        </div>
    )
}

export default InputOption
