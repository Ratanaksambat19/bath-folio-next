import Link from "next/link";
import styles from '../../styles/articleSummaryCard.module.css';

export default function ArticleSummaryCard({ blog, fileName }) {
    return (
        <Link href={`/articles/${fileName}`}>
            <div className={styles.cardContainer}>
                <h1>
                    {blog.title}
                </h1>
                <p>{blog.abstract}</p>
                <span>Read more</span>
            </div>
        </Link>
    )
}