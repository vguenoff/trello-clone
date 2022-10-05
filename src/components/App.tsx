import styles from '@/styles/App.module.scss'
import Column from '@/components/Column'

export default function App() {
    return (
        <div className={styles.App}>
            <Column title="Todo: " />
        </div>
    )
}
