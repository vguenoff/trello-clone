import { useEffect, useRef, useState, SyntheticEvent } from 'react'
import { SetItemProps } from '@/types'
import styles from '@/styles/SetItem.module.scss'

export default function SetItem({
    children,
    actionButtonText,
    onSet,
    dark,
}: SetItemProps) {
    const [showForm, setShowForm] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [showForm])

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()

        if (!inputValue) return

        onSet(inputValue)
        clearInput()
    }

    const clearInput = () => {
        setInputValue('')
        setShowForm(false)
    }

    return (
        <>
            {showForm ? (
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
                    <div>
                        <button type="submit">{actionButtonText}</button>
                        <button type="reset" onClick={() => clearInput()}>
                            Close
                        </button>
                    </div>
                </form>
            ) : (
                <button
                    className={styles.addItem}
                    style={{ color: dark ? 'navy' : 'white' }}
                    onClick={() => setShowForm(true)}
                >
                    {children}
                </button>
            )}
        </>
    )
}
