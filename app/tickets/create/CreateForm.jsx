"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateForm() {

    const router = useRouter();

    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [priority, setPriority] = useState("low");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setIsLoading(true);

        const ticket = {
            title, body, priority, user_email: "user@example.com"
        }

        const res = await fetch("http://localhost:4000/tickets", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(ticket)
        })

        if(res.status === 201) {
            router.refresh();
            router.push("/tickets");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <h2 style={{ textAlign: "center" }}>Add a New Ticket</h2>
            <label htmlFor="title">
                <span>Title:</span>
                <input
                    type="text"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title of ticket"
                />
            </label>
            <label htmlFor="body">
                <span>Body:</span>
                <textarea
                    name=""
                    id=""
                    row="3"
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                    placeholder="Body of ticket"
                />
            </label>
            <label htmlFor="priority">
                <span>Priority:</span>
                <select
                    type="text"
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option value="low">low priority</option>
                    <option value="medium">medium priority</option>
                    <option value="high">high priority</option>
                </select>
            </label>
            <button type="submit" disabled={isLoading}>
                {isLoading ? (
                    <span>Adding...</span>
                ) : (
                    <span>Create Ticket</span>
                )}
            </button>
        </form>
    );
}
