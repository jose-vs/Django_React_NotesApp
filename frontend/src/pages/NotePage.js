import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  let { id } = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/${id}`);
    const data = await response.json();
    console.log(data);
    setNote(data);
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
