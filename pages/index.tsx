import React from "react";
import Link from 'next/link';

const HomePage: React.FC = () => {
  return <div>Welcome to Next.js! <span>User page <Link href='/user'>here</Link></span></div>
}

export default HomePage;