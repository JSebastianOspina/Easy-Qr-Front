import { useState } from "react"

const useInput = (initialValue: string = '', onChangeCallback: (newValue: string) => void) => {
    const [inputState, setInputState] = useState<string>(initialValue)

    const handleOnChange = (newInputValue: string)=>{
        setInputState(newInputValue)
        onChangeCallback(newInputValue)
    }

    return {
        inputState,
        handleOnChange
    }

}


export default useInput