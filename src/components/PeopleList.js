import { PeopleListItem } from "./PeopleListItem";

export const PeopleList = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <PeopleListItem person={person} key={person.id} />
      ))}
    </>
  );
};
