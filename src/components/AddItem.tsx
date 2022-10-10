import { useEffect, useRef, useState, SyntheticEvent } from 'react'
import { nanoid } from 'nanoid'

import styles from '@/styles/AddItem.module.scss'

interface Props {
    dark?: boolean
    onAdd({ text, id }: { id: string; text: string }): void
    mainButtonText: string
}

export default function AddItem({ dark, onAdd, mainButtonText }: Props) {
    const [showAddForm, setShowAddForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [showAddForm])

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (!inputValue) return

        onAdd({ id: nanoid(), text: inputValue })
        setInputValue('')
        setShowAddForm(false)
    }

    return (
        <>
            {showAddForm ? (
                <form className={styles.addItemForm} {...{ onSubmit }}>
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
