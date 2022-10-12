import { useListStore } from '@/store'
import styles from '@/styles/Card.module.scss'

interface Props {
    listId: string
    taskId: string
    children?: React.ReactNode
}

export default function Card({ listId, taskId, children }: Props) {
    const { removeItem } = useListStore()

    return (
        <section className={styles.card}>
            <p>
                <span>{children}</span>
            </p>
            <div className={styles.icons}>
                <img src="/edit-icon.svg" alt="Edit Icon" title="Edit Card" />
                <img
                    src="/delete-icon.svg"
                    alt="Delete Icon"
                    title="Delete Card"
                    onClick={() => removeItem({ listId, taskId })}
                />
            </div>
        </section>
    )
}
