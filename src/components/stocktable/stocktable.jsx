import React, { useState, useEffect, Fragment } from "react";
import { ContextProvider } from "../../Provider";
import Loading from "../loading/Loading";
import QuotesDetails from "./quotedetails";
import TableBody from "./stocktable-body";

const getTableHeaderNames = (titles) => {
  // Getting values as object so by accessing Object.keys
  return titles.length ? Object.keys(titles[0]) : [];
};

const getHeader = (titles) => {
  // getting the header for the table
  const headerNames = getTableHeaderNames(titles);
  return (
    <tr>
      {headerNames.map((item, idx) => (
        <th scope="col" key={idx}>
          {item.toLocaleUpperCase()}
        </th>
      ))}
    </tr>
  );
};

export function StockTable() {
  // ContextProvider.Provider - We are providing the data to the consumer
  // values are shared between the components

  const [stockNames, getStockNames] = useState([]);
  const [quoteDetails, getQuoteDetails] = useState({});
  const [isModalOpen, toggleModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const result = await fetch(
      "https://financialmodelingprep.com/api/v3/company/stock/list"
    );
    result.json().then((res) => getStockNames(res.symbolsList));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loading data-testid="loader" />
      ) : (
        <Fragment>
          <ContextProvider.Provider
            value={{
              stockNames: stockNames.slice(0, 20),
              quoteDetails,
              isModalOpen,
              toggleModal
            }}
          >
            <div className="column-50" data-testid="main-table">
              <table className="table">
                <thead>{getHeader(stockNames)}</thead>
                <tbody>
                  <TableBody
                    stockNames={stockNames}
                    getQuoteDetails={getQuoteDetails}
                    toggleModal={toggleModal}
                  />
                </tbody>
              </table>
            </div>

            <div className="column-50" data-testid="quotes-table">
              <QuotesDetails quoteDetails={quoteDetails} />
            </div>
          </ContextProvider.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}
