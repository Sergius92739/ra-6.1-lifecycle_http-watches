import { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types"

export default function AddForm(props) {
  const [form, setForm] = useState({ title: '', zone: '' });
  const { addWatch } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({...prevForm, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const watch = { id: shortid.generate(), ...form }
    addWatch(watch);
    setForm({ title: '', zone: '' });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__input-box">
        <label htmlFor="title" className="form__label">Название</label>
        <input
          onChange={handleChange}
          value={form.title}
          id="title"
          type="text"
          name="title"
          className="form__input"
          required />
      </div>
      <div className="form__input-box">
        <label htmlFor="zone" className="form__label">Временная зона</label>
        <input
          onChange={handleChange}
          type="number"
          value={form.zone}
          className="form__input"
          id="zone"
          name="zone"
          required />
      </div>
      <button className="form__btn">Добавить</button>
    </form>
  )
}

AddForm.propTypes = {
  addWatch: PropTypes.func.isRequired
}
