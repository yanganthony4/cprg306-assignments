"use client"
// Import the useUserAuth hook
import React from "react";
import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";
 
// Display some of the user's information
const Page = () => {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async() => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Login failed: ", error);
        }
    }

    const handleLogout = async() => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    }

    return (
        <main style={{ textAlign: "center", marginTop: "50px" }}>    
            {!user ? (
                <button onClick={handleLogin} className="py-2 px-4 bg-green-600 rounded-md w-50 font-bold text-white hover:bg-green-500">Login with Github </button>
            ) : (
                <div>
                <p>Welcome , {user.displayName} ({user.email})</p>
                <br />
                <Link href="/week-9/shopping-list">Go to Shopping List</Link>
                <br />
                <br />
                <button onClick={handleLogout} className="py-2 px-4 bg-green-600 rounded-md w-50 font-bold text-white hover:bg-green-500">Logout</button>
                </div>
            )}
        </main>
    );
};

export default Page;