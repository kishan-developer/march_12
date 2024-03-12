import { useState } from 'react'
import './App.css';

function App() {
  const [model , setModel] = useState(false);
  
  const toggleModal =() => {
    setModel(!model)
  }

  return (
    <>
      <button 
        onClick={toggleModal}
        className="btn-modal"
      >
        Open
      </button>

      {
        model && (
          <div className="modal">
            <div
              onClick={toggleModal}
              className="overlay"
            ></div>
            <div className="modal-content">
              <h2>Hello Model</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, dolorem? Atque, ipsum. Eaque accusantium similique commodi mollitia doloribus tenetur, consectetur deleniti voluptas reiciendis, nobis temporibus? Aliquam saepe autem optio vitae. Dolor ipsa consequuntur odio reprehenderit, sed itaque unde vitae sunt dolores iste, laborum reiciendis laboriosam ea, quasi blanditiis veritatis molestias.
              </p>
              <button className='close-modal'
                onClick={toggleModal}
              >CLOSE</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default App
