import styles from "./ShowTable.module.css";

function ShowTable() {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>First</th>
            <th>Last</th>
            <th>Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>john</td>
            <td>down</td>
            <td>@mdo</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>john</td>
            <td>down</td>
            <td>@mdo</td>
          </tr>{" "}
          <tr>
            <td>1</td>
            <td>john</td>
            <td>down</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowTable;
