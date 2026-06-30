import React, { useState, useEffect } from 'react'
import './Popup.css'

function Popup({ message = 'Teste', duration = 3000, onClose }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            if (onClose) {
                onClose()
            }
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    return (
        <>
            {isVisible && (
                <div className="popup-container">
                    <div className="popup-content">
                        <p>{message}</p>
                        <button onClick={() => setIsVisible(false)}>❌</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Popup