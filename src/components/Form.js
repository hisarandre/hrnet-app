import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { departments, states } from "../utils/selectDatas";
import { addEmployee } from "../features/employee/EmployeeSlice";
import { Modal } from "my-modal-react-component";
import SelectMenu from "./SelectMenu";
import Fieldset from "./Fieldset";
import Input from "./Input";

const Form = () => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [startdate, setStartdate] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState(states[0].abbreviation);
  const [department, setDepartment] = useState(departments[0]);
  const [isOpen, setIsOpen] = useState(false);

  const employee = {
    firstname: firstname,
    lastname: lastname,
    birthday: birthday,
    street: street,
    zipcode: zipcode,
    city: city,
    state: state,
    startdate: startdate,
    department: department,
  };

  const filterState = (e) => {
    let newState = states.find((el) => el.name === e.target.value);
    setState(newState.abbreviation);
  };

  const reset = () => {
    setFirstname("");
    setLastname("");
    setBirthday("");
    setStartdate("");
    setStreet("");
    setZipcode("");
    setCity("");
    setState(states[0].abbreviation);
    setDepartment(departments[0]);
    setIsOpen(true);
    document.getElementById("state").selectedIndex = 0;
    document.getElementById("department").selectedIndex = 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (department === "" || state === "") return;
    console.log("hello");
    dispatch(addEmployee(employee));
    reset();
  };

  return (
    <section className="form-wrapper">
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <Fieldset title="infos" legend="Personnal informations">
          <Input label="Firstname" id="firstname" type="text" value={firstname} setValue={(e) => setFirstname(e.target.value)} />
          <Input label="Lastname" id="lastname" type="text" value={lastname} setValue={(e) => setLastname(e.target.value)} />
          <Input label="Date of Birth" id="date-of-birth" type="date" value={birthday} setValue={(e) => setBirthday(e.target.value)} />
          <Input label="Start date" id="start-date" type="date" value={startdate} setValue={(e) => setStartdate(e.target.value)} />
        </Fieldset>

        <Fieldset title="adress" legend="Adresse">
          <Input label="Street" id="street" type="text" value={street} setValue={(e) => setStreet(e.target.value)} />
          <Input label="City" id="city" type="text" value={city} setValue={(e) => setCity(e.target.value)} />
          <SelectMenu options={states} label="State" name="state" id="state" setValue={filterState} />
          <Input label="Zip Code" id="zip-code" type="text" value={zipcode} setValue={(e) => setZipcode(e.target.value)} />
        </Fieldset>

        <SelectMenu
          options={departments}
          label="Department"
          name="department"
          id="department"
          setValue={(e) => setDepartment(e.target.value)}
        />

        <button type="submit" className="save-button">
          Save
        </button>
      </form>

      <Modal message="User created successfully!" open={isOpen} close={() => setIsOpen(!isOpen)} />
    </section>
  );
};

export default Form;
