import { TrashIcon } from "@heroicons/react/24/outline"; //importing the TrashIcon component from the Heroicons library

//defining a funcction with passed in variables
export default function TrashButton({ postId, onDelete, refreshPosts }) {
  const handleDeleteClick = (event) => {
    event.preventDefault(); // Prevent default behavior (like page refresh on button click)
    onDelete(postId, refreshPosts); // Pass postId correctly to deletePost and refresh to refresh that page
  };

  return (
    <button
      className="text-gray-500"
      onClick={handleDeleteClick} // Use the new handleDeleteClick function
    >
      <TrashIcon className="h-6 w-6"></TrashIcon>
    </button>
  );
}
