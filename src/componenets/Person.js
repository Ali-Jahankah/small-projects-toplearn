import Edit from "./SvgEdit";
import Delete from "./SvgDelete";
const Person = ({
  age,
  name,
  gender,
  lastname,
  number,
  mykey,
  time,
  myclass,
}) => {
  
  return (
    <tr style={{ background: myclass }}>
      <td>{number}</td>
      <td>{name} </td>
      <td>{lastname}</td>
      <td>{gender}</td>
      <td>{age} </td>
      <td>{time}</td>
      <td>
        <Edit mykey={mykey}></Edit>
      </td>
      <td>
        <Delete mykey={mykey}></Delete>
      </td>
    </tr>
  );
};

export default Person;
