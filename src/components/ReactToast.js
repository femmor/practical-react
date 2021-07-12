import React from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

toast.configure()

const ReactToast = () => {
  const notify = () => {
    toast.success('Notification', {
      position: toast.POSITION.TOP_CENTER
      // autoClose: false
    })
  }

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  )
}

export default ReactToast
