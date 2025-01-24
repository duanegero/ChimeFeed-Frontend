//defining a function with passed in vaiable
const openPostChimePage = (userId) => {
  //creating a variable to handle the window URL
  const url = `/post-chime?userId=${userId}`;
  //open window with choosen URL
  window.open(url, "_blank", "width=500,height=650 resizable=no");
};

//export function to use else where in app
export default openPostChimePage;
