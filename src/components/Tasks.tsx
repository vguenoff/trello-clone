import Card from '@/components/Card'
import AddItem from '@/components/AddItem'
import { List } from '@/types'
import { useListStore } from '@/store'
import styles from '@/styles/Tasks.module.scss'

export default function Tasks({ id: listId, title, tasks }: List) {
    const { addItem, removeList } = useListStore()

    return (
        <div className={styles.tasks}>
            <section className={styles.header}>
                <AddItem
                    actionButtonText="Update List Title"
                    onAdd={console.log}
                    dark
                >
                    <h3>{title}</h3>
                </AddItem>
                <div className={styles.icons}>
                    <img
                        src="/edit-icon.svg"
                        alt="Edit Icon"
                        title="Edit List"
                    />
                    <img
                        src="/delete-icon.svg"
                        alt="Delete Icon"
                        title="Delete List"
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
            <AddItem
                actionButtonText="Create"
                onAdd={text => addItem({ listId, text })}
                dark
            >
                <div className="add">+ Add another item</div>
            </AddItem>
        </div>
    )
}
