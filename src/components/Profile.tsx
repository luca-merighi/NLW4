import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGQp55h80Chgg/profile-displayphoto-shrink_800_800/0/1629772533813?e=1637798400&v=beta&t=ObbYnUj5U8BCGScEyzaIyX2UdTZhsHft30oKrUN_yFM" alt="Luca" />

            <div>
                <strong>Luca Fernandes</strong>
                <p>
                <img src="icons/level.svg" alt="Level" />
                Level {level}
                </p>
            </div>
        </div>
    )
}
