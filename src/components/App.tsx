import Tasks from '@/components/Tasks'
import AddItem from '@/components/AddItem'

import styles from '@/styles/App.module.scss'

import { lists } from '@/store'

export default function App() {
    return (
        <section className={styles.app}>
            {lists.map(({ id, title, tasks }) => (
                <section key={id}>
                    <Tasks {...{ title, tasks }} />
                </section>
            ))}
            <AddItem mainButtonText="+ Add another list" onAdd={console.log} />
        </section>
    )
}
