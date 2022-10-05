import Column from '@/components/Column'
import AddItem from '@/components/AddItem'
import styles from '@/styles/App.module.scss'

export default function App() {
    return (
        <section className={styles.app}>
            <Column title="Todo: " />
            <AddItem mainButtonText="+ Add another list" onAdd={console.log} />
        </section>
    )
}
