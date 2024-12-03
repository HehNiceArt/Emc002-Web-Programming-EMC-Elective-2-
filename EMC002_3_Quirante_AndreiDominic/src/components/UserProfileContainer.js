import React from "react";
import UserProfile from './UserProfile'
export default function UserProfileContainer() {
    return (
        <div className="App">
            <UserProfile illust="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" name="John Doe" age="30" location="San Jose" />
            <UserProfile illust="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" name="Jane Smith" age="25" location="San Francisco" />
            <UserProfile illust="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg" name="Chris Johnson" age="40" location="Los Angeles" />
            <UserProfile illust="https://cdn-icons-png.flaticon.com/512/560/560236.png" name="Patricia Brown" age="35" location="Chicago" />
            <UserProfile illust="https://cdn-icons-png.flaticon.com/512/6690/6690538.png" name="Michael Smith" age="28" location="Houston" />
            <UserProfile illust="https://cdn-icons-png.flaticon.com/512/560/560232.png" name="Linda Wilson" age="32" location="Phoenix" />
        </div>
    )
}