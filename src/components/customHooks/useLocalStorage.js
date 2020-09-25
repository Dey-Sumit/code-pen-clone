import { useState, useEffect } from 'react';
const PREFIX = 'codepen-clone-'

export const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key

    const [value, setValue] = useState(() => {

        // check if the item is already present
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) {
            return JSON.parse(jsonValue)
        }

        return initialValue

    })

    // const [value, setValue] = useState(initialValue) 
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])


    return [value, setValue]
};

export default useLocalStorage;