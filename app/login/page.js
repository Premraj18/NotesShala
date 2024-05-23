"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";



export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const onLogin = async () => {

    }


    return (
        <div className="flex flex-col items-center justify-center py-2" style={{ height: '100vh', marginTop: '2vh' }}>
            <h2>Login to</h2>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>NOTESHAALA</h1>
            <div className="flex flex-col items-center py-2" style={{ marginTop: '8vh' }}>
                <input
                    className="p-2 border rounded-lg mb-4"
                    id="email"
                    type="text"
                    value={user.email}
                    placeholder="email"
                />
                <input
                    className="p-2 border rounded-lg mb-4"
                    id="password"
                    type="text"
                    value={user.password}
                    placeholder="password"
                />
                <button onClick={onLogin} className="p-2 border rounded-lg mb-4 focus:outline-none" style={{
                    marginTop: '4vh',
                    backgroundColor: "rgb(34, 170, 225)",
                    color: 'white'
                }}>
                    LOGIN
                </button>
                <hr style={{ borderTop: '1px solid black', width: '100%', marginTop: '10px', marginBottom: '20px' }} />
                <Link href="/signup" style={{ color: 'blue' }}>Sign In</Link>
            </div>
        </div>
    )
}