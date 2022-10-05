import { useState } from 'react'

import styles from '@/styles/AddItem.module.scss'

interface Props {
    dark?: boolean
    onAdd(inputValue: string): void
    mainButtonText: string
}

export default function AddItem({ dark, onAdd, mainButtonText }: Props) {
    const [showAddForm, setShowAddForm] = useState(false)
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            {showAddForm ? (
                <div className={styles.addItemForm}>
                    <input
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                    <button onClick={() => onAdd(inputValue)}>Create</button>
                </div>
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
