import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./OrderSelections.css";

const sizes = [
  {
    name: "small",
    value: "Kucuk",
  },
  {
    name: "medium",
    value: "Orta",
  },
  {
    name: "large",
    value: "Buyuk",
  },
];

function OrderSelections({ extras, cost, selections, setSelections }) {
  const navigate = useNavigate();

  function onChange(inputName, e) {
    setSelections({
      ...selections,
      [inputName]: e.target.value,
    });
  }

  function onExtrasChange(index) {
    const newExtras = selections.extras.map((value, i) => {
      return i === index ? !value : value;
    });

    setSelections({
      ...selections,
      extras: newExtras,
    });
  }

  function notify(text) {
    toast.error(text, {
      autoClose: 5000,
      theme: "dark",
    });
  }

  function validate() {
    let error = "";

    if (!selections.size) {
      error = "Lutfen pizza boyutu seciniz!";
    }

    if (!error && !selections.paste) {
      error = "Lutfen hamur secimi yapiniz!";
    }

    const selectedExtras = selections.extras.filter((extra) => extra).length;

    if (!error && (selectedExtras < 4 || selectedExtras > 10)) {
      error = "Lutfen en az 4 en fazla 10 ek malzeme seciniz!";
    }

    if (error) {
      notify(error);
    }

    return error;
  }

  function onSubmit() {
    const error = validate();

    if (error) {
      return;
    }

    axios
      .post("https://reqres.in/api/pizza", { ...selections, ...cost })
      .then((response) => {
        console.log(response.data);

        navigate("/success");
      })
      .catch(() => {
        notify("Uppss! Bir hata olustu!");
      });
  }

  return (
    <div className="selections">
      <div className="selections-wrapper">
        <div className="top-selections">
          <div className="size-selection">
            <div className="selection-title">
              Boyut Sec <span className="red">*</span>
            </div>
            <div className="size-group">
              {sizes.map((size, index) => {
                return (
                  <label for={size.name} key={index}>
                    <input
                      name="size"
                      type="radio"
                      value={size.name}
                      id={size.name}
                      checked={selections.size === size.name}
                      onChange={(e) => onChange("size", e)}
                    />
                    {size.value}
                  </label>
                );
              })}
            </div>
          </div>
          <div className="paste-selection">
            <div className="selection-title">
              Hamur Sec <span className="red">*</span>
            </div>
            <div className="paste-wrapper">
              <select
                id="paste"
                name="paste"
                value={selections.paste}
                onChange={(e) => onChange("paste", e)}
              >
                <option value="" disabled selected>
                  Hamur Kalinligi
                </option>
                <option value="ince">Ince</option>
                <option value="orta">Orta</option>
                <option value="kalin">Kalin</option>
              </select>
            </div>
          </div>
        </div>
        <div className="extras">
          <div className="selection-title">Ek Malzemeler</div>
          <div className="extras-caption">
            En Fazla 10 malzeme seçebilirsiniz. 5₺
          </div>
          <div className="extras-selection">
            {extras.map((extra, index) => {
              return (
                <label for={`extra-${index}`} key={index}>
                  <input
                    name="extra"
                    type="checkbox"
                    id={`extra-${index}`}
                    value={index}
                    checked={selections.extras[index]}
                    onChange={() => onExtrasChange(index)}
                  />
                  {extra}
                </label>
              );
            })}
          </div>
        </div>
        <div className="order-note">
          <div className="selection-title">Siparis Notu</div>
          <textarea
            name="note"
            value={selections.note}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={(e) => onChange("note", e)}
          ></textarea>
        </div>
        <hr className="line" />
        <div className="order-bottom">
          <div className="count-wrapper">
            <button
              className="minus"
              disabled={selections.count === 1}
              onClick={() =>
                setSelections({
                  ...selections,
                  count: selections.count - 1,
                })
              }
            >
              -
            </button>
            <div className="count">{selections.count}</div>
            <button
              className="plus"
              onClick={() =>
                setSelections({
                  ...selections,
                  count: selections.count + 1,
                })
              }
            >
              +
            </button>
          </div>
          <div className="order-total">
            <div className="summary">
              <div className="selection-title">Siparis Toplami</div>
              <div className="selections-total">
                <div className="label">Secimler</div>
                <div className="price">{cost.extras.toFixed(2)}₺</div>
              </div>
              <div className="selections-total red">
                <div className="label">Toplam</div>
                <div className="price">{cost.total.toFixed(2)}₺</div>
              </div>
            </div>
            <button className="make-order" onClick={onSubmit}>
              SIPARIS VER
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default OrderSelections;
