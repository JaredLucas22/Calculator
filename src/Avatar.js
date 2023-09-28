function getImageUrl(person, size = 's') {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}



//Running the Code:
export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}// Curly Bracket for Actual Value
      width={size}
      height={size}
    />
    
  );
}
//Running the Code: