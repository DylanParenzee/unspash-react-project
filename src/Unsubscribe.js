import React from "react";
import { useState } from "react";
import Footer from "./Footer";

const Unsubscribe = () => {
  const [userDelete, setUserDelete] = useState("");
  const [deleteSucess, setDeleteSucess] = useState(false);

  let deleteId;

  function deleteUser() {
    let user = userDelete;
    fetch("http://localhost:4000/clients")
      .then((res) => res.json())
      .then((data) => {
        data.map((item) => {
          if (item.userEmail == user) {
            deleteId = item.id;
            fetch(`http://localhost:4000/clients/` + deleteId, {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
            })
              .then(() => {
                setDeleteSucess(true);
              })
              .then(() => {
                setUserDelete("");
              })
              .catch((error) => {
                alert(`${error} - failed to delete ${deleteId}`);
              });
          }
        });
      })
      .catch((error) => {
        console.log(
          `${error} to start up server input command 'npm run server into terminal'`
        );
        alert(`${error} - please run server to make requests`);
      });
  }

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser();
  };

  function DisplayMessage() {
    if (deleteSucess === true) {
      return (
        <h2 className="delete-sucess-message">
          The user has been deleted, Bon Voyage!
        </h2>
      );
    }
  }

  return (
    <div className="subscribe-page">
      <div className="subscribe-container">
        <h1 className="subscribe-title"> We're Sorry to see you Go </h1>
        <h2>Re-subscribe at any time</h2>

        <form className="subscribe-form">
          <input
            className="email-input"
            type="text"
            placeholder="Enter Your Email Address"
            value={userDelete}
            onChange={(e) => setUserDelete(e.target.value)}
          />
          <button onClick={handleDelete} className="subscribe-button">
            Unsubscribe
          </button>
        </form>

        <div className="signup-info">
          <h4>Enter your email address and click unsubscribe</h4>
          <DisplayMessage />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Unsubscribe;
