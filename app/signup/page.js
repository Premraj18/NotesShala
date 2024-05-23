"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";



export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const onSignup = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-centerpy-2" style={{ height: '100vh', marginTop: '10vh' }}>
            <h2>Ready to become the member of </h2>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>NOTESHAALA</h1>
            <div className="flex flex-col items-center py-2" style={{ marginTop: '8vh' }}>
                <input
                    className="p-2 border rounded-lg mb-4"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    placeholder="username"
                />
                <input
                    className="p-2 border rounded-lg mb-4"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    placeholder="email"
                />
                <input
                    className="p-2 border rounded-lg mb-4"
                    id="password"
                    type="text"
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    placeholder="password"
                />
                <button onClick={onSignup} className="p-2 border rounded-lg mb-4 focus:outline-none" style={{
                    marginTop: '4vh',
                    backgroundColor: "rgb(34, 170, 225)",
                    color: 'white'
                }}>
                    <Link href="/otp">REGISTER</Link>
                </button>
                <hr style={{ borderTop: '1px solid black', width: '100%', marginTop: '10px', marginBottom: '20px' }} />
                <p>Continue with <img src="logo.png" alt="Google-logo" style={{ width: '20px', height: 'auto', display: 'inline' }} /></p>
                <p style={{ marginTop: '10vh' }}>Already signed in ? <Link href="/login" style={{ color: 'blue' }}>Log In</Link></p>
            </div>
        </div>
    )
}