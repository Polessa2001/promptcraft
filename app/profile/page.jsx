"use client";

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { userouter } from 'next/navigation';
import Profile from '@components/profile';

const MyProfile = () => {
    const { data: session } = useState([]);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        }
        if (session?.user.id) fetchPosts();
      }, []);
    const handleEdit = () => {

    }
    const handleDelete = () => {

    }
    return (
        <Profile
            name="My"
            desc="Welcome to your personilized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile