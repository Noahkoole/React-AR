import { useEffect } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div id='root'>
    <NewPage />
  </div>,
document.querySelector('body')
);

function NewPage() {

  useEffect(() => {
    setTimeout(() => {   
      const video = document.querySelector('video');
      if (video) {
        video.remove()
      }
    }, 500);
  }, [])
  
  return (
    <div>
      <button>Hellllo</button>
    </div>
  )
}