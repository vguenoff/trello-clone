import { useEffect, useRef, useState, SyntheticEvent } from 'react'
import { AddItemProps } from '@/types'
import styles from '@/styles/AddItem.module.scss'

export default function AddItem({ dark, onAdd, mainButtonText }: AddItemProps) {
    const [showAddForm, setShowAddForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [showAddForm])

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (!inputValue) return

        onAdd(inputValue)
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
                    <button type="submit">Create</button>
                </form>
            ) : (
                <button
                    className={styles.addItem}
                    style={{ color: dark ? 'navy' : 'white' }}
                    onClick={() => setShowAddForm(true)}
                >
                    {mainButtonText}
                </button>
            )}
        </>
    )
}
