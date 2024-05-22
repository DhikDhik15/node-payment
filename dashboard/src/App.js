import React, { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get-transaction')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
}, []);
  return (
    <div className="App">
      <header className="App-header">
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Order ID</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
          <tbody>
            {
              posts.data?.map((data, index) => (             
              <tr key={index}>
                  <th scope="row">{index + 1}</th>
                <td>{data.order_id}</td>
                <td>{data.amount}</td>
              </tr>
              ))
            }
          </tbody>
      </table>
      </header>
    </div>
  );
}

export default App;
