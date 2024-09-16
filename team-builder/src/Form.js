import React from "react";

export default function Form({ values, update, submit, memberToEdit }) {
  const onChange = (e) => {
    let { name, value } = e.target;
    update(name, value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!memberToEdit) {
      submit();
    } else {
      submit(true);
    }
  };
  return (
    <form className="form-container" onSubmit={onSubmit}>
      <label>
        Name:
        <input
          id="form-name"
          autoFocus
          name="name"
          type="text"
          value={values.name}
          onChange={onChange}
          placeholder="Future member's name"
        />
      </label>
      <label>
        email:
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          placeholder="Future member's email"
        />
      </label>
      <label>
        Role:
        <select name="role" value={values.role} onChange={onChange}>
          <option value=""></option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
      </label>
      <button>{memberToEdit ? "Edit Member" : "Add New Member"}</button>
    </form>
  );
}
