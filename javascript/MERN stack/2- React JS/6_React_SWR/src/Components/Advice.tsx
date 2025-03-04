import { useAdvice } from "../Hooks/useAdvice";

const Advice = () => {
  const { advice, isLoading, error, refetch } = useAdvice();

  return (
    <div className="p-5 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Random Advice</h1>
      {error && <p className="text-red-500">Failed to fetch advice.</p>}
      {isLoading ? <p>Loading advice...</p> : <p className="text-lg italic">{advice}</p>}
      <button
        onClick={() => refetch()} // Manually refetch data
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Get New Advice
      </button>
    </div>
  );
};

export default Advice;
