import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async ()=>{
    try {
      const response = await fetch("/blogs/blogs.json")
    const data = await response.json()
    console.log(data);
    setBlogs(data)
    } catch (error) {
      console.log(error);
    }
  
  }
  
  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <AuthContext.Provider value={{blogs}}>
        {children}
    </AuthContext.Provider>
  )
}