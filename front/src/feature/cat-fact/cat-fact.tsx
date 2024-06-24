"use client";

import { useAsync } from "react-use";

export function CatFact() {
  const { loading, error, value } = useAsync(async () => {
    const response = await fetch("http://localhost:3001/cat-fact");
    return await response.text();
  }, []);

  if (loading) return <div>Loading cat fact...</div>;
  if (error) return <div>Error loading cat fact: {error.message}</div>;

  return <div>One cat fact: {value}</div>;
}
