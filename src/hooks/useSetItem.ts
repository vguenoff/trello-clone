import { useEffect, useRef, useState, SyntheticEvent } from 'react'

export default function useAddItem() {
    const [showForm, setShowForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [showForm])

    const clearInput = () => {
        setInputValue('')
        setShowForm(false)
    }

    return {
        showForm,
        setShowForm,
        inputValue,
        setInputValue,
        clearInput,
        inputRef,
    }
}
