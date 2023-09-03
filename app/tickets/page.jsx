import data from "../../data/db.json";
import Link from "next/link";
import TicketCard from "../Components/TicketCard";

const getTickets = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return await fetch("http://localhost:4000/tickets", {
        next: {
            revalidate: 0,
        },
    })
        .then((res) => {
            if (!res.ok) {
                return [];
            }
            return res.json();
        })
        .catch((err) => {
            console.log("Error: " + err.message);
            return [];
        });
};

export default async function page() {
    const buttonStyle = {
        background: "#fff",
        color: "#725af5",
        textDecoration: "none",
        padding: "0.7em",
        borderRadius: "10px",
    };
    const headStyle = {
        marginBottom: "20px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
    };
    const tickets = data.tickets;
    // const tickets = await getTickets();
    return (
        <main>
            <div style={headStyle}>
                <div style={{marginBottom: "30px"}}>
                    <h2 style={{ margin: "5px 0" }}>Tickets</h2>
                </div>
                <div style={{marginBottom: "30px"}}>
                    <Link href={"/tickets/create"} style={buttonStyle}>
                        New Ticket
                    </Link>
                </div>
            </div>
            {tickets.length > 0 ? (
                tickets.map((ticket) => (
                    <TicketCard key={ticket.id} {...ticket} />
                ))
            ) : (
                <p>No tickets present</p>
            )}
        </main>
    );
}
