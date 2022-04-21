import { useEffect, useState } from 'react';
import Fuse from "fuse.js";
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

const fuseOptions = {
    threshold: 0.35,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    shouldSort: true,
    includeScore: true,
    useExtendedSearch: true,
    keys: ["frontMatter.tags"]
};

export default function TagList({ tags, blogs, filterBlogs, articleType  }) {
    const [tagList, setTagList] = useState([tags[0]])
  
    const fuse = new Fuse(blogs, fuseOptions);

    useEffect(() => {

        if (tagList.length === 0) {
            const results = fuse.search(articleType).map((result) => result.item);
            filterBlogs(results);
        } else {    
            const formattedTags = [...tagList.map((item) => ({ 'frontMatter.tags': item.toLowerCase() }))];
            const queries = { $or: [...formattedTags] }
            const results = fuse.search(queries).map((result) => result.item);
            filterBlogs(results);
        }
    }, [tagList])

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

