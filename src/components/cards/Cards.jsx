import Card from "../card/Card";

export default function Cards(props) {
  const { characters, onClose} = props;
  return (
    <div>
      {characters.map((char) => {
        return (
          <Card
            key={char.id}
            name={char.name}
            status={char.status}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
