import { useEffect, useRef, useState, SyntheticEvent } from 'react'
import { AddItemProps } from '@/types'
import styles from '@/styles/SetItem.module.scss'

export default function SetItem({
    children,
    actionButtonText,
    onSet,
    dark,
}: AddItemProps) {
    const [showAddForm, setShowAddForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [showAddForm])

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (!inputValue) return

        onSet(inputValue)
        clearInput()
    }

    const clearInput = () => {
        setInputValue('')
        setShowAddForm(false)
    }

    return (
        <>
            {showAddForm ? (
                <form
                    {...{ onSubmit }}
                    className={styles.addItemForm}
                    onKeyUp={e => e.key === 'Escape' && clearInput()}
                >
                    <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        ref={inputRef}
                    />
                    <button type="submit">{actionButtonText}</button>
                </form>
            ) : (
                <button
                    className={styles.addItem}
                    style={{ color: dark ? 'navy' : 'white' }}
                    onClick={() => setShowAddForm(true)}
                >
                    {children}
                </button>
            )}
        </>
    )
}