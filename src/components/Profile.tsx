import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level} = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.fcpq3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/242515706_927009401502968_5085950122251386387_n.jpg?_nc_ht=instagram.fcpq3-1.fna.fbcdn.net&_nc_ohc=4Ie8oFG7kikAX9lWTOb&edm=ABfd0MgBAAAA&ccb=7-4&oh=1e62442ddec0543568d42eed2501d1d4&oe=6150F524&_nc_sid=7bff83" alt="Luca" />

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
