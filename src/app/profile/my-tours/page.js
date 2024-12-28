"use client";
import Card from "@/components/partials/MyTourCard";
import { useGetUserTours } from "@/core/services/queries";

function MyTours() {
  const { data: tours } = useGetUserTours();

  return (
    <div className="min-h-screen w-full overflow-y-auto">
      <Card tours={tours} />
    </div>
  );
}

export default MyTours;
