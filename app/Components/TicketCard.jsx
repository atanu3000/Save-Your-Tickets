import Link from "next/link";

export default function TicketCard({ id, title, body, priority, user_email }) {
  const linkStyle = {
    textDecoration: "none",
    color: "#000",
    margin: "0",
  }
    return (
        <div className="ticket-card">
            <Link href={`/tickets/${id}`} style={linkStyle}>
                <h4>{title}</h4>
                <p>{body.slice(0, 200)}...</p>
                <h4 style={{color: "#725af5", margin: "5px 0"}}>More</h4>
                <span className={`badge ${priority}`}>{priority} priority</span>
            </Link>
        </div>
    );
}
