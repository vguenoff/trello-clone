import { useEffect, useRef } from 'react'

export default function useInputFocus(showForm: boolean) {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [showForm])

    return inputRef
}
