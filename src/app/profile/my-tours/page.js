"use client";
import Card from "@/components/partials/MyTourCard";
import EmptyTours from "@/components/templates/EmptyMyTours/page";
import { useGetUserTours } from "@/core/services/queries";

function MyTours() {
  const { data: tours, error, isError } = useGetUserTours();

  return (
    <div className="container mx-auto">
      {tours?.data.length === 0 || isError ? (
        <EmptyTours />
      ) : (
        <div className="min-h-screen w-full overflow-y-auto">
          <Card tours={tours} />
        </div>
      )}
    </div>
  );
}

export default MyTours;
