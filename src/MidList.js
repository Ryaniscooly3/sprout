const MidList = ({ mids }) => {
    return (
      <div className="mid-list">
        {mids.map((mid, i) => (
          <div>
            {/* {`this is image ${vine.imageNumber}`} */}
            <div className={`vine${mid.imageNumber % 2 === 0 ? `Even` : `Odd`}`} key={i}>
              <img alt={mid.imageNumber} src={mid.src} />
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default MidList;
  