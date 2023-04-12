import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return(
    <div style={{width:"50%"}}>
      <label style={{color:"black", fontFamily: "monaco,Consolas,Lucida Console,monospace"}}>{label}</label>
      <input {...input} style={{ marginBottom: '5', fontFamily: "monaco,Consolas,Lucida Console,monospace"}}/>
      <div style={{ marginBottom: '20px', color:"#B1E5F2" }}>
      {touched && error}
      </div>
    </div>
  );
} ;
