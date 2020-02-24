import React, { useContext } from "react";
import Modal from "react-modal";
import { ContextProvider } from "../../Provider";

export default function QuotesDetails(props) {
  // Created modal from the quotes shared from the Context Provider
  // isModalOpen totally shared from Provider and it's consumed here

  const respectiveRenders = (torender) => {
    return (
      <tr>
        {Object[torender](props.quoteDetails)
          .slice(0, 7)
          .map((row, idx) => (
            <td key={idx}>{row.toString().toLocaleUpperCase()}</td>
          ))}
      </tr>
    );
  };

  const renderDetails = () => {
    // Based on Keys and Values tables is been rendered
    return (
      <table className="table" data-testid="table-quotes">
        <thead>{respectiveRenders("keys")}</thead>
        <tbody>{respectiveRenders("values")}</tbody>
      </table>
    );
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  // Using useContext provided React specially for hooks
  const context = useContext(ContextProvider);

  return (
    <Modal
      isOpen={context.isModalOpen}
      onRequestClose={() => context.toggleModal(false)}
      style={customStyles}
      contentLabel="Quotes"
      ariaHideApp={false}
    >
      <button
        onClick={() => context.toggleModal(false)}
        className="float-right btn btn-danger"
      >
        X
      </button>
      <hr />
      <br />
      <h5>Company Details</h5>
      <div>{renderDetails()}</div>
    </Modal>
  );
}
