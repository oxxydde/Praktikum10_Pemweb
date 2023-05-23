import { useRef, useState } from "react";
import './ListMahasiswa.css';
import TableRowList from '../Components/TableRowList';
import EditForm from "../Components/EditForm";

export default function ListMahasiswa() {
  /* BEGIN BLOCK OF STATE FUNCTIONS */
  const [data, setData] = useState({
    editId: undefined,
    id: 0,
    lists: [],
  });
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const addEntry = (first_name, last_name, age) => {
    setData((prevState) => {
      let newState = Object.assign({}, prevState);
      const newUser = {
        id: ++newState.id,
        firstName: first_name,
        lastName: last_name,
        age: age
      };
      newState.lists = [...newState.lists, newUser];
      return newState;
    })
  };
  const deleteEntryByIndex = (index) => {
    setData((prevState) => {
      let newState = Object.assign({}, prevState);
      newState.lists = newState.lists.filter((val, ix) => ix !== index);
      return newState;
    });
  };
  const editEntryById = (id, first_name, last_name, age) => {
    setData((prevState) => {
      let newState = Object.assign({}, prevState);
      let searchDataIndex = newState.lists.findIndex((e) => e.id === id);
      newState.lists[searchDataIndex].firstName = first_name;
      newState.lists[searchDataIndex].lastName = last_name;
      newState.lists[searchDataIndex].age = age;
      newState.editId = undefined;
      return newState;
    });
  };
  /* END BLOCK OF STATE FUNCTIONS */
  return (
    <div className="container">
      <button
        className='add-action'
        onClick={() => {
          addEntry('First', 'Last', 0);
        }}>
        Add Mahasiswa
      </button>
      <div className="inner-container">
        <table>
          <tbody>
            {
              data.lists.map((val, i) =>
                <TableRowList
                  key={i}
                  nums={i + 1}
                  id={val.id}
                  firstName={val.firstName}
                  lastName={val.lastName}
                  age={val.age}
                  onEditClick={() => {
                    setData((prevState) => {
                      let newState = Object.assign({}, prevState);
                      newState.editId = val.id;
                      return newState;
                    })
                  }}
                  onDeleteClick={
                    () => {
                      deleteEntryByIndex(i);
                    }
                  } />
              )
            }
          </tbody>
        </table>
      </div>
      {
        data.editId !== undefined && (
          <EditForm
            firstName={data.lists[data.lists.findIndex((e) => e.id === data.editId)].firstName}
            lastName={data.lists[data.lists.findIndex((e) => e.id === data.editId)].lastName}
            age={data.lists[data.lists.findIndex((e) => e.id === data.editId)].age}
            refs={[firstName, lastName, age]}
            onConfirmClick={
              () => {
                editEntryById(data.editId, firstName.current.value, lastName.current.value, age.current.value);
              }
            } onCancelClick={
              () => {
                setData((prevState) => {
                  let newState = Object.assign({}, prevState);
                  newState.editId = undefined;
                  return newState;
                });
              }
            }
          />
        )
      }
    </div>
  );
}