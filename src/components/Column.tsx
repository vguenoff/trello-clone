import styles from '@/styles/Column.module.scss'
import Card from '@/components/Card'

interface Props {
    title: string
}

export default function Column({ title }: Props) {
    return (
        <div className={styles.Column}>
            <h3>{title}</h3>
            <Card>Generate app scaffold</Card>
            <Card>Learn TypeScript</Card>
            <Card>Begin to use static typing</Card>
        </div>
    )
}
