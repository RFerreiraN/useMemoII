import {useEffect, useMemo, useState} from 'react';

export const UseMemoComponent = () => {

  const [calculos, setCalculos] = useState([2,4,5,6,9,8,9])
  const [show, setShow] = useState(true)


  const getCalculo = useMemo(() => {
      console.log('Calcilando..')
      return calculos.reduce((a,b) => a*b, 1)
  }, [calculos]);

  const addNumero = () => {
    setCalculos([
      ...calculos, calculos[calculos.length -1] + 1
    ])
    console.log(getCalculo)
  }
  
  const handleButton = () => {
    setShow(!show)
  }
  return (
    <>
      <h1>Hook useMemo</h1>
      <hr />
      <h3>Calculos :</h3>
      <button onClick={addNumero} className='btn btn-success'>Añadir</button>
      <button onClick={handleButton} className='btn btn-warning'>{ show ? 'Show' : 'Hide'}</button>
      <p>El resultado es : { getCalculo }</p>
    </>
  )
}
