import React from 'react';
const VineList = ({ vines }) => {
  return (
    <div className="vine-list">
      {vines.map((vine, i) => (
        <div>
          {/* {`this is image ${vine.imageNumber}`} */}
          <div className={`vine${vine.imageNumber % 2 === 0 ? `Even` : `Odd`}`} key={i}>
            <img alt={vine.imageNumber} src={vine.src} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VineList;
