import React from "react";

function ContactItem(props) {
  return (
    <div className="flex flex-col">
      <label className="uppercase text-sm py-2">{props.label}</label>
      <input
        className="border-2 rounded-lg p-3 flex border-gray-300"
        type={props.type}
      />
    </div>
  );
}

export default ContactItem;
