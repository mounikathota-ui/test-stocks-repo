import React from "react";

export default function TableBody(props) {
  const handleData = async (data) => {
    // Calling profile API based on the selected symbol
    // and the detail is send to QuoteDetails

    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/company/profile/${data}`
    );
    res.json().then((res) => {
      props.toggleModal(true);
      props.getQuoteDetails(res.profile);
    });
  };

  const getBody = () => {
    const getOnly20 = props.stockNames.slice(0, 20);
    return getOnly20.map((row, Oidx) => {
      return (
        <tr
          data-testid={`table-row-${Oidx}`}
          key={Oidx}
          onClick={() => handleData(row["symbol"])}
        >
          {Object.values(row).map((data, Iidx) => (
            <td key={Iidx}>{data}</td>
          ))}
        </tr>
      );
    });
  };
  return getBody();
}
