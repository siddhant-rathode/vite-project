const App = () => {
  return (
    <div className="mt-5 w-[80%] m-auto">
      <h1 className="mt-5 text-5xl">This is React Vite Boilerplate</h1>
      <h2 className="mt-5 text-3xl">{import.meta.env.VITE_API_KEY}</h2>
      <button className="mt-5 px-5 py-2 bg-red-300 rounded ">Explore</button>
    </div>
  );
};
export default App;