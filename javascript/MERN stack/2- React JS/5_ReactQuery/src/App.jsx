import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchTodos = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

// Simulated addTodo (no actual API call)
const addTodo = async (todo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        slip: {
          id: Math.floor(Math.random() * 1000), // Generate a random ID
          advice: todo.title, // Use the title as the advice
        },
      });
    }, 500); // Simulate a delay
  });
};

function App() {
  const { mutate } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => console.log("Todo added!"),
  });

  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["todos"], // No need for page
    queryFn: fetchTodos, // Use fetchTodos here
    refetchInterval: 5000,
    staleTime: 5000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Todos {isFetching && "(Updating...)"}</h1>

      <ul>
        {data && data.slip && (
          <li key={data.slip.id}>{data.slip.advice}</li>
        )}
      </ul>
      <div>
        <button onClick={() => mutate({ title: "New Todo", completed: false })}>
          Add Todo
        </button>
        <br />
        <br />
        <button onClick={() => refetch()}>Refetch Data</button>
      </div>
    </div>
  );
}

export default App;