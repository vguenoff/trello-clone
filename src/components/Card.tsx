import styles from '@/styles/Card.module.scss'

interface Props {
    children?: React.ReactNode
}

export default function Card({ children }: Props) {
    return (
        <section className={styles.card}>
            <p>
                <span>{children}</span>
            </p>
            <div className={styles.icons}>
                <img src="/edit-icon.svg" alt="Edit Icon" />
                <img src="/delete-icon.svg" alt="Delete Icon" />
            </div>
        </section>
    )
}
