import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/73050019?v=4" alt="Luca" />

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
