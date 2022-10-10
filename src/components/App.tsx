import Tasks from '@/components/Tasks'
import AddItem from '@/components/AddItem'

import { useListStore } from '@/store'

import styles from '@/styles/App.module.scss'

export default function App() {
    const { lists, addList } = useListStore()

    return (
        <section className={styles.app}>
            {lists.map(({ id, title, tasks }) => (
                <Tasks key={id} {...{ id, title, tasks }} />
            ))}
            <AddItem
                mainButtonText="+ Add another list"
                onAdd={title => addList(title)}
            />
        </section>
    )
}
