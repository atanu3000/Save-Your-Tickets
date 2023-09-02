import Link from "next/link";
import Image from "next/image";
import Logo from "./dojo-logo.png";
// import LogoutButton from './LogoutButton'

export default function Navbar({ user }) {
    const linkStyle = {
        textDecoration: "none",
        color: '#666',
        fontSize: "1.2em",
        cursor: 'pointer'
    }
    return (
        <nav>
            <div className="nav-bar">
                <Image
                    src={Logo}
                    alt="Dojo Helpdesk logo"
                    width={70}
                    placeholder="blur"
                    quality={100}
                    className="logo"
                />
                <h1>Dojo Helpdesk</h1>
            </div>
            <Link style={linkStyle} href="/">Dashboard</Link>
            <Link style={linkStyle} href="/tickets" className="mr-auto">
                Tickets
            </Link>
            {user && <span>Hello, User</span>}
            {/* <LogoutButton /> */}
        </nav>
    );
}
