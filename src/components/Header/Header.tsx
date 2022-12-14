import { BurgerBtn } from "./BurgerBtn/BurgerBtn"

export const Header = () => {
    return <header className="header">
        <BurgerBtn />
        <svg className="header__logo" width="38" height="48" viewBox="0 0 38 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a href="https://www.apple.com/">
                <path d="M31.7364 25.4696C31.802 32.5822 37.9321 34.9491 38 34.9793C37.9482 35.1462 37.0205 38.3524 34.7704 41.6641C32.8253 44.5272 30.8065 47.3798 27.6263 47.4389C24.5014 47.4969 23.4966 45.5727 19.924 45.5727C16.3525 45.5727 15.2361 47.3798 12.278 47.4969C9.20833 47.6139 6.87078 44.4008 4.90948 41.5482C0.901802 35.713 -2.1609 25.0593 1.95153 17.8679C3.9945 14.2967 7.64544 12.0352 11.6082 11.9772C14.6226 11.9193 17.4678 14.0195 19.3105 14.0195C21.152 14.0195 24.6096 11.4938 28.2443 11.8647C29.766 11.9285 34.0372 12.4837 36.7799 16.5268C36.5589 16.6648 31.6834 19.5232 31.7364 25.4696V25.4696ZM25.8636 8.00425C27.4933 6.01754 28.5902 3.25185 28.291 0.5C25.9419 0.595084 23.1013 2.0765 21.4163 4.06212C19.9062 5.82049 18.5837 8.63486 18.9406 11.3322C21.5589 11.5363 24.2338 9.99223 25.8636 8.00426" fill="#F2F4F7" />
            </a>
        </svg>
        <nav className="header__nav">
            <ul className="header__nav-list">
                <li className="header__nav-item"><a className="header__nav-link" href="#">Features</a></li>
                <li className="header__nav-item"><a className="header__nav-link" href="#">Partners</a></li>
                <li className="header__nav-item"><a className="header__nav-link" href="#">Stories</a></li>
            </ul>
        </nav>
        <button className="header__button">Download for free</button>
    </header>

}