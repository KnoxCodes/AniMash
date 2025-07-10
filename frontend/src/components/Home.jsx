import './styles.css';
import { Link } from 'react-router-dom';


export default function Home(){



    return <div className='body'>
        <div className="subtitle">
            <h2>Facemash for Anime</h2>
        </div>
        <div className="title">
            <h1>AniMash</h1>
        </div>
        <div className="links">
        <Link to="/voting">Vote Now</Link>
        <Link to="/leaderboard">Ranking</Link>
      </div>
    </div>

}