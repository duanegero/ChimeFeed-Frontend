//defining a function with passed in vaiable
const openUpdateChimeWindow = (postId, content) => {
  localStorage.setItem("content", content);
  const url = `${window.location.origin}/update-chime?postId=${postId}`;
  window.open(url, "_blank", "width=500,height=650,resizable=no");
};

export default openUpdateChimeWindow;
