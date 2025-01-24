export const loginButtonClassName = () => {
  return "bg-red-800 hover:bg-red-800 text-white py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-black transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce mt-5 mb-15 font-bangers tracking-wider";
};

export const deleteFriendButtonClassName = () => {
  return "bg-gradient-to-r from-amber-500 to-red-800 hover:from-red-800 hover:to-amber-500 text-white font-bangers tracking-widest py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce";
};

export const signUpButton = () => {
  return "relative rounded-full bg-white border border-red-700 px-24 py-2 font-bangers tracking-widest font-bold text-amber-500 transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-amber-500 hover:bg-gray-50 hover:before:bg-amber-700 mt-10 mb-8";
};

export default (loginButtonClassName,
deleteFriendButtonClassName,
signUpButton);
