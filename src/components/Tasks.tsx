import Card from '@/components/Card'
import AddItem from '@/components/AddItem'
import { List } from '@/types'
import { useListStore } from '@/store'
import styles from '@/styles/Tasks.module.scss'

export default function Tasks({ id: listId, title, tasks }: List) {
    const { addItem } = useListStore()

    return (
        <div className={styles.tasks}>
            <h3>{title}</h3>
            {tasks.map(({ text, id }) => {
                return <Card key={id}>{text}</Card>
            })}
            <AddItem
                mainButtonText="+ Add another item"
                onAdd={text => addItem({ listId, text })}
                dark
            />
        </div>
    )
}
