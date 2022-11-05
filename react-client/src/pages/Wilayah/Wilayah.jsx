import React, { useState } from "react";

function Wilayah() {
  const [wilayah, setWilayah] = useState(1);

  return (
    <>
    <div className="d-flex mt-5 pt-5 justify-content-center">
      <div>Pilih Wilayah</div>
      <br/>
      <select value={wilayah} onChange={(e) => setWilayah(e.target.value)} className='mx-2'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <div className="d-flex justify-content-center mb-5 mt-3">
      <h2>Komisi Pemuda KGPM Wilayah {wilayah}</h2>
    </div>
    </>
  );
}

export default Wilayah;
