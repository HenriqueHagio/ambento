"use client"

import { useUserContext } from "@/context/userContext";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const { setUser } = useUserContext();
    const router = useRouter();

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <button className="nav-link" onClick={logout}>
            Logout
        </button>
    );
}
