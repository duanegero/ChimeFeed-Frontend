//defining a function with passed in variable
const openChimeLikesWindow = (postId) => {
  //setting varible for desired URL
  const url = `/chime-likes?postId=${postId}`;

  //opening window with url and post id variable
  window.open(url, "_blank", "width=500,height=650 resizable=no");
};

//export function to use else where in app
export default openChimeLikesWindow;
