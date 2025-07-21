import { useState, useMemo } from 'react';


export const UseMemoComponent = () => {

  const [numbers, setNumbers] = useState([2, 5, 6, 8, 7, 4])

  const getCalculo = useMemo(()=> { //Memoriza para no tener que renderizar cada vez que algo cambie
    console.log('Calculando...')
    return numbers.reduce((a,b) => a*b, 1)
  }, [numbers]) 
    

  const addNumber = () => {
    setNumbers([
      ...numbers, numbers[numbers.length - 1] + 1
    ])
    console.log(numbers)
  }

  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Use Memo</h1>
      <hr />
      <h2>Calculos Pesados</h2>
      <button className='btn btn-success' onClick={addNumber}>Añadir +</button>
      <button className='btn btn-warning' onClick={() => setShow(!show)}>{show ? 'Show' : 'Hide'}</button> {/* Lo colocamos solo para mostrar que al cargar no vuelva a generar los calculos ya que no le compete */}
      <p>El resultado es: <strong>{getCalculo}</strong> </p>
    </>
  )
}
