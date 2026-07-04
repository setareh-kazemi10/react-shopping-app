import { Link } from 'react-router-dom';
import styles from './logo.module.css';
const Logo = () => {
    return (
        <div className={styles.siteLogo}>
            <Link to="/">
                <img src="/image/logo.png" alt="" />
            </Link>
        </div>
    );
}
export default Logo;