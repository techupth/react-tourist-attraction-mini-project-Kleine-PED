function SearchLocation(props) {
  return (
    <>
      <div className="search-container">
        <label>ค้นหาที่เที่ยว</label>
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน"
          onChange={(event) => props.setKeyState(event.target.value)}
          value={props.inputKeyState}
        />
      </div>
    </>
  );
}

export default SearchLocation;
