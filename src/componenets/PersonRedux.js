import Edit from "./svgEditRedux";
import Delete from "./svgDeleteRedux";
const Person = ({ number, person }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{person.name} </td>
      <td>{person.lastname}</td>
      <td>{person.gender}</td>
      <td>{person.age} </td>
      <td>{person.time}</td>
      <td>
        <Edit mykey={person.id}></Edit>
      </td>
      <td>
        <Delete mykey={person.id}></Delete>
      </td>
    </tr>
  );
};

export default Person;
