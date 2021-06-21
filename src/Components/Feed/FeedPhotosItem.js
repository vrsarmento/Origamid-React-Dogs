import React from 'react'
import Image from '../Helpers/Image'
import styles from './FeedPhotosItem.module.css'

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.view}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotosItem
