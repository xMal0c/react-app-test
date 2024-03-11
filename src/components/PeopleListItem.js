export function PeopleListItem({ person }) {
  return (
    <div>
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
    </div>
  );
}
