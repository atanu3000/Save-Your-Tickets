import Link from "next/link";
import data from "../../../data/db.json";

export async function genarateStaticParams() {
    const res = await fetch("http://localhost:4000/tickets");

    const tickets = await res.json();

    return tickets.map((ticket) => ({ id: ticket.id }));
}

const getTicket = async (id) => {

    await new Promise((resolve) => setTimeout(resolve,3000));

    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60,
        },
    });

    if (res.ok) {
        return res.json();
    }
};

export default async function TicketDetails({ params }) {
    const id = params.id;
    const ticket = data.tickets.find((ticket) => ticket.id === id);
    // const ticket = await getTicket(id);
    return (
        <main>
            <h2>Ticket Details</h2>

            {ticket ? (
                <div className="ticket-card">
                    <h4 style={{ marginBottom: "5px" }}>{ticket.title}</h4>
                    <small>Created by {ticket.user_email}</small>
                    <p>{ticket.body}</p>
                    <span className={`badge ${ticket.priority}`}>
                        {ticket.priority} priority
                    </span>
                </div>
            ) : (
                <div style={{margin: "2em auto", textAlign: 'center'}}>
                    <p
                        style={{
                            fontSize: "1.5em",
                            fontWeight: "300",
                        }}
                    >
                        This ticket doesn't not exist
                    </p>
                    <p>Go back to all <Link href={'/tickets'}>tickets</Link></p>
                </div>
            )}
        </main>
    );
}
