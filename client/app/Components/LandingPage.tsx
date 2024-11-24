"use client"

//Libraries
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  const handleSearch = (category: string) => {
    router.push(`/suggestions?${category? `category=${category}` : ''}`);
  };

  return (
    <div className="flex flex-col mt-[25vw] w-full">
      <div className="flex justify-center items-center gap-5">
        <button className="btn" onClick={() => handleSearch('plumber')}>Plumber</button>
        <button className="btn" onClick={() => handleSearch('electrician')}>Electrician</button>
      </div>
    </div>
  );
}
