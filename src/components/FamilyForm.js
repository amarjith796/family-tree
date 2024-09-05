import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFamilyData } from "../redux/actions";

const FamilyForm = () => {
  const dispatch = useDispatch();
  const [rootName, setRootName] = useState("");
  const [isrootDeceased, setIsRootDeceased] = useState(false);
  const [people, setPeople] = useState([]);

  const handleAddPerson = (parentId = null) => {
    const newPerson = { id: Date.now(), name: "", children: [] };
    if (parentId === null) {
      setPeople([...people, newPerson]);
    } else {
      const addPersonRecursive = (personList) =>
        personList.map((person) =>
          person.id === parentId
            ? { ...person, children: [...person.children, newPerson] }
            : { ...person, children: addPersonRecursive(person.children) }
        );

      setPeople(addPersonRecursive(people));
    }
  };

  const handleRemovePerson = (id) => {
    const removePersonRecursive = (personList) =>
      personList
        .filter((person) => person.id !== id)
        .map((person) => ({
          ...person,
          children: removePersonRecursive(person.children),
        }));

    setPeople(removePersonRecursive(people));
  };

  const handleChange = (id, name) => {
    const updatePersonRecursive = (personList) =>
      personList.map((person) =>
        person.id === id
          ? { ...person, name }
          : { ...person, children: updatePersonRecursive(person.children) }
      );

    setPeople(updatePersonRecursive(people));
  };

  const handlePersonAlive = (id, value) => {
    const updatePersonAliveRecursive = (personList) =>
      personList.map((person) =>
        person.id === id
          ? { ...person, alive: value }
          : { ...person, children: updatePersonAliveRecursive(person.children) }
      );

    setPeople(updatePersonAliveRecursive(people));
  };
  const handleSpuse = (id, spousename) => {
    const updatePersonSpouseRecursive = (personList) =>
      personList.map((person) =>
        person.id === id
          ? { ...person, spouse: spousename }
          : { ...person, children: updatePersonSpouseRecursive(person.children) }
      );

    setPeople(updatePersonSpouseRecursive(people));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const buildFamilyData = (personList) =>
      personList.map((person) => ({
        name: person.name,
        isDeceased: person.alive,
        spouse: person.spouse,
        children: buildFamilyData(person.children),
      }));

    const familyData = {
      name: rootName,
      isDeceased: isrootDeceased,
      children: buildFamilyData(people),
    };
    dispatch(addFamilyData(familyData));
    // alert(JSON.stringify(familyData, null, 2));
  };

  const renderPersonForm = (person, parentId) => (
    <div key={person.id} style={{ marginLeft: "20px" }}>
      <label>
        Name:
        <input
          type="text"
          value={person.name}
          onChange={(e) => handleChange(person.id, e.target.value)}
          autoFocus
          required
        />
      </label> &nbsp; &nbsp;
      <label>
        Spouse:
        <input
          type="text"
          value={person.spouse}
          onChange={(e) => handleSpuse(person.id, e.target.value)}
          placeholder="optional"
        />
      </label> &nbsp; &nbsp;
      Deceased: <input type="checkbox" checked={person.isDeceased} onChange={(e)=> handlePersonAlive(person.id, e.target.checked)} /> &nbsp; &nbsp;&nbsp;  
      <button type="button" onClick={() => handleAddPerson(person.id)}>
        Add Child
      </button>
      <button type="button" onClick={() => handleRemovePerson(person.id)}>
        Remove
      </button>
      <div>
        {person.children.map((child) => renderPersonForm(child, person.id))}
      </div>
    </div>
  );


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Root Person</legend>
          <label>
            Name:
            <input
              type="text"
              value={rootName}
              onChange={(e) => setRootName(e.target.value)}
              required
            />
          </label>
          Deceased: <input type="checkbox" checked={isrootDeceased} onChange={(e)=> setIsRootDeceased(e.target.checked)} /> &nbsp; &nbsp;&nbsp;
          <button type="button" onClick={() => handleAddPerson()}>
            Add Child
          </button>
        </fieldset>
        <div>{people.map((person) => renderPersonForm(person))}</div>
        <br />
        <button type="submit" className="generateButton">Generate Tree</button>
      </form>
    </div>
  );
};

export default FamilyForm;
