import styled from 'styled-components'

const StyleTitre= styled.h3`box-shadow: 1px 3px 5px 0px rgba(0, 0 ,0, 0.2); border-radius: 10px`

export default function Aide(){
  return (
    <div>
      <StyleTitre className='container mt-5 bg-danger text-light p-3 text-center'>Retrouver les réponses à vos questions les plus fréquentes dans la section FAQ</StyleTitre>

    </div>
  )
}