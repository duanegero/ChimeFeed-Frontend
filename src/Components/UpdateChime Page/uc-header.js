export default function UpdateChimeHeader() {
  return (
    <div>
      <header className="bg-amber-500 text-white rounded-lg shadow-2xl">
        <div className="flex flex-col items-center justify-between px-6 py-6">
          <h1 className="text-5xl font-bangers hover:text-red-800 transition duration-400 pb-4 tracking-widest">
            ChimeFeed
          </h1>
          <p className="tracking-widest text-xl font-poppins text-red-800">
            Share What Matters, When It Matters.
          </p>
        </div>
      </header>
      <header className="bg-red-800 w-full py-2 rounded-lg text-amber-500 font-bangers tracking-widest">
        <div className="flex justify-center items-center">
          <p>Update Chime</p>
        </div>
      </header>
    </div>
  );
}
