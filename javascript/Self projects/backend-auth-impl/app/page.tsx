"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age })
      });
      
      if (res.ok) {
        const data = await res.json();
        console.log('Created:', data);
        setName(""); 
        setAge("");
        fetchList();  
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchList = async () => {
    try {
      const res = await fetch('/api/users');
      if (res.ok) {
        const users = await res.json();
        setList(users);
        console.log(users);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchList();  
  }, []);  

  return (
    <div className="main border flex justify-center items-center flex-col gap-5 p-8">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-2 w-64"
          required
        />
        <br />
        <input
          type="number"
          placeholder="Enter age..."
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2 mb-2 w-64"
          required
        />
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {loading ? 'Creating...' : 'Submit'}
        </button>
      </form>

      
      <div className="results">
        {list.length === 0 ? (
          <p>No users yet</p>
        ) : (
          list.map((user) => (
            <div key={user._id} className="border p-4 mb-2 w-64">
              Name: {user.name} | Age: {user.age}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
