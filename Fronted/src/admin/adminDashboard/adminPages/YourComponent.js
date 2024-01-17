import React, { useEffect } from 'react';
import ScriptTag from 'react-script-tag';

const YourComponent = () => {
    useEffect(() => {
        // Your CKEditor initialization code here
        ClassicEditor
          .create(document.querySelector('#editor'))
          .catch(error => {
            console.error(error);
          });
      }, []);
  return (
    <div>

    </div>
  )
}

export default YourComponent