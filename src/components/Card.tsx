import styles from '@/styles/Card.module.scss'

interface Props {
    children?: React.ReactNode
}

export default function Card({ children }: Props) {
    return <div className={styles.Card}>{children}</div>
}
