import { useState } from 'react';
import styles from '../../styles/tagList.module.css';

function TagBtn ({ isActive, value }) {
    return (
        <div className={isActive ? `${styles.active} ${styles.btnContainer}` : styles.btnContainer}>
            <span>
                {
                    isActive ? <p>#{value}</p>
                        : <p>{value} </p>
                }
            </span>
        </div>
    )
}

export default function TagList ({ tags }) {
    const [tagList, setTagList] = useState([tags[0]])

    const handleTagClick = (e) => {
        
        const tagName = e.currentTarget.value
      
        setTagList([...tagList, tagName])
        
        if (tagList.length !== 0) {
            for (let i = 0; i < tagList.length; i+=1) {
                if (tagList[i] === tagName) {
                    const updatedList = tagList.filter(tag => tag !== tagName)
                    setTagList(updatedList)
                }
            }
        }
    }

    return (
        <div className={styles.tagListContainer}>
            {tags.map((value) => {
                let activeTag = false
                if (tagList.includes(value)) {
                    activeTag = true
                }

                return <button key={value} value={value} type='button' onClick={handleTagClick}>
                    < TagBtn value={value} isActive={activeTag}/>
                </button>
            }
                
            )}
        </div>
    )
}

