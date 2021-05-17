import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGL7Qp0h34SbQ/profile-displayphoto-shrink_200_200/0/1621036168969?e=1626912000&v=beta&t=4at7LHpY6deFfBaQid_wtey7rWHO3DmJ346Rre7-V24" alt="Luca" />

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