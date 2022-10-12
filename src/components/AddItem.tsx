import { SyntheticEvent } from 'react'
import { AddItemProps } from '@/types'
import styles from '@/styles/AddItem.module.scss'
import useAddItem from '@/hooks/useSetItem'

export default function AddItem({
    children,
    actionButtonText,
    onAdd,
    dark,
}: AddItemProps) {
    const {
        showForm,
        setShowForm,
        inputValue,
        setInputValue,
        clearInput,
        inputRef,
    } = useAddItem()

    return (
        <>
            {showForm ? (
                <form
                    onSubmit={(e: SyntheticEvent) => {
                        e.preventDefault()
                        if (!inputValue) return

                        onAdd(inputValue)
                        clearInput()
                    }}
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
