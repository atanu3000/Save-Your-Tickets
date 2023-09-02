import Link from "next/link";

export default function NotFound() {
    const linkStyle = {
        textDecoration: "none",
        margin: "0",
    };
    return (
        <main>
            <div style={{position: "relative", marginTop: "4em", textAlign: "center" }}>
            <h2>There was a problem!</h2>
            <p>We couldn't find the page you are looking for.</p>
            <p>Go back to <Link href={"/"}>Dashboard</Link></p>
            </div>
        </main>
    );
}
