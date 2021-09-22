import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fcpq3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/242515706_927009401502968_5085950122251386387_n.jpg?_nc_ht=instagram.fcpq3-1.fna.fbcdn.net&_nc_ohc=4Ie8oFG7kikAX98KWO0&edm=ABfd0MgBAAAA&ccb=7-4&oh=ab6bc9895e11793d0378b0cad55692b6&oe=6152EF64&_nc_sid=7bff83" alt="Luca" />

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
