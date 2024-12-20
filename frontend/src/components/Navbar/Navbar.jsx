import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

export default function Navbar({ userInfo, onSearchNote }) {
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const onLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    const handleSearch = () => {
        if (searchQuery) {
            onSearchNote(searchQuery)
        }
    }

    const onClearSearch = () => {
        setSearchQuery("")
    }
    return (
        <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
            <h2 className="text-xl font-medium text-black py-2">Notes</h2>

            {/* <SearchBar
                value={searchQuery}
                onChange={({ target }) => {
                    setSearchQuery(target.value)
                }}
                onClearSearch={onClearSearch}
                handleSearch={handleSearch}
            /> */}

            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
        </div>
    )
}
