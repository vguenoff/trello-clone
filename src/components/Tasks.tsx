import Card from '@/components/Card'
import SetItem from '@/components/SetItem'
import { List } from '@/types'
import { useListStore } from '@/store'
import styles from '@/styles/Tasks.module.scss'

export default function Tasks({ id: listId, title, tasks }: List) {
    const { addItem, removeList } = useListStore()

    return (
        <div className={styles.tasks}>
            <section className={styles.header}>
                <h3>{title}</h3>
                <div className={styles.icons}>
                    <img src="/edit-icon.svg" alt="Edit Icon" />
                    <img
                        src="/delete-icon.svg"
                        alt="Delete Icon"
                        onClick={() => removeList(listId)}
                    />
                </div>
            </section>
            {tasks.map(({ text, id: taskId }) => {
                return (
                    <Card key={taskId} {...{ listId, taskId }}>
                        {text}
                    </Card>
                )
            })}
            <SetItem
                actionButtonText="Create"
                onSet={text => addItem({ listId, text })}
                dark
            >
                + Add another item
            </SetItem>
        </div>
    )
}
