import styles from "./ShowTable.module.css";

function ShowTable({
  allData = {},
  isLoading = false,
  limit,
  setOffset,
  setLimit,
  offset,
}) {
  const data = allData?.data || [];

  const metadata = allData?.metadata;

  const handlePrevClick = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  const handleNextClick = () => {
    if (offset + limit < metadata?.totalCount) {
      setOffset(offset + limit);
    }
  };

  const handleKeyDown = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className={styles.loaderBox}>
        {isLoading && <span className={styles.loader} />}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Place Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data?.length <= 0 ? (
            <tr>
              <td colSpan="4" className={styles.noResultFound}>
                No result found
              </td>
            </tr>
          ) : (
            data.map((cItem, index) => (
              <tr key={cItem.id}>
                <td>{offset + index + 1}</td>
                <td>{cItem.name}</td>
                <td>
                  <img
                    src={`https://flagsapi.com/${cItem.countryCode}/flat/32.png`}
                  ></img>
                </td>
              </tr>
            ))
          )}
          {/*  */}
        </tbody>
      </table>

      {data?.length > 0 && (
        <div className={styles.pagination}>
          <span>
            <input
              type="number"
              value={limit}
              min="5"
              max="10"
              onChange={(e) => setLimit(parseInt(e.target.value))}
              onKeyDown={handleKeyDown}
            />
          </span>
          <button onClick={handlePrevClick}>&lt; </button>
          <span>
            Page {Math.floor(offset / limit) + 1} of{" "}
            {Math.ceil(metadata?.totalCount / limit)}
          </span>
          <button onClick={handleNextClick}>&gt;</button>
        </div>
      )}
    </div>
  );
}

export default ShowTable;
