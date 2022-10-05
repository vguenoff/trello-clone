import styles from '@/styles/Column.module.scss'
import Card from '@/components/Card'
import AddItem from '@/components/AddItem'

interface Props {
    title: string
}

export default function Column({ title }: Props) {
    return (
        <div className={styles.column}>
            <h3>{title}</h3>
            <Card>Generate app scaffold</Card>
            <Card>Learn TypeScript</Card>
            <Card>Begin to use static typing</Card>
            <AddItem
                mainButtonText="+ Add another item"
                onAdd={console.log}
                dark
            />
        </div>
    )
}
