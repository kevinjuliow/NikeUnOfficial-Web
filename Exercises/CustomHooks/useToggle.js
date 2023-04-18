import { useState } from "react";

import React from 'react'

function useToggle(e = false) {
  const [state ,  setstate] = useState(e)
  const toggle = () =>{
    setstate(!state)
  }
  return [state,toggle]
}

export default useToggle