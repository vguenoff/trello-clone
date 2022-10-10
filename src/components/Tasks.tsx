import styles from '@/styles/Tasks.module.scss'
import Card from '@/components/Card'
import AddItem from '@/components/AddItem'

import { Task } from '@/types'

interface Props {
    title: string
    tasks: Task[]
}

export default function Tasks({ title, tasks }: Props) {
    return (
        <div className={styles.tasks}>
            <h3>{title}</h3>
            {tasks.map(({ text, id }) => {
                return <Card key={id}>{text}</Card>
            })}
            <AddItem
                mainButtonText="+ Add another item"
                onAdd={console.log}
                dark
            />
        </div>
    )
}
