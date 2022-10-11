import Tasks from '@/components/Tasks'
import SetItem from '@/components/SetItem'
import { useListStore } from '@/store'
import styles from '@/styles/App.module.scss'

export default function App() {
    const { lists, addList } = useListStore()

    return (
        <section className={styles.app}>
            {lists.map(({ id, title, tasks }) => (
                <Tasks key={id} {...{ id, title, tasks }} />
            ))}
            <SetItem actionButtonText="Create" onSet={title => addList(title)}>
                + Add another list
            </SetItem>
        </section>
    )
}
