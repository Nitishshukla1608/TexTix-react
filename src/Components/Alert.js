import React from 'react'

function Alert(props) {
    const capatilize=(word)=>{
     const lower = word.toLowerCase();
     return lower.charAt(0).toUpperCase()+lower.slice(1)
    }
  return (
    props.alert && <div>
      <div class="alert alert-info" role="alert">
<strong>{props.alert.type}</strong>:{props.alert.msg}
</div>
    </div>
  )
}

export default Alert
