import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../../styles/uploadmoment.module.css'

function UploadMoment({ isOpen, onClose, onUpload }) {
  const [caption, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputKey, setInputKey] = useState(0);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = () => {
    // Add validation if needed
    if (selectedFile && caption) {
      onUpload({ caption, selectedFile });
    }
    handleCloseModal();
  };

  const handleImageClick = () => {
    // Trigger click on the hidden file input to choose a different picture
    setInputKey((prevKey) => prevKey + 1);
  };

  const handleCloseModal = () => {
    // Check if both caption and selectedFile are empty
    if (!caption.trim() && !selectedFile) {
      // If both are empty, close the modal without confirmation
      onClose();
    }

    else if(caption && selectedFile){
      setSelectedFile(null);
      setCaption('');
      onClose();
    }

    else if(caption && !selectedFile){
      alert('Please choose an image to upload.');
    }
    else if(!caption.trim() && selectedFile){
      const shouldUpload = window.confirm('Are you sure you want to Upload without a caption?');
      if (shouldUpload) {
        setSelectedFile(null);
        setCaption('');
        onClose()
      }
    }
    else {
      // If either caption or selectedFile is not empty, prompt a confirmation
      const shouldClose = window.confirm('Are you sure you want to exit without uploading your moment?');
      if (shouldClose) {
        // If confirmed, close the modal
        setSelectedFile(null);
        setCaption('');
        onClose();
      }
    }
  };


  return (
    <Modal
      className={styles.reactModalContent}
      overlayClassName={styles.reactModalOverlay}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}>
      <h2 className={styles.reactModalContenth2}>create a new moment</h2>
      <label className="image-upload-button" >
        {selectedFile ? (
          <>
            <img
              // id="file-input"
              src={URL.createObjectURL(selectedFile)}
              alt="Preview"
              className={styles.imagePreview}
              onClick={handleImageClick}
            />
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              className="modal-input"
              style={{ display: 'none' }}
              key={inputKey}
              />
          </>
        ) : (
          <>
            {/* <span>Choose Image</span> */}
            <input
              type="file"
              id="file-input"
              onChange={handleFileChange}
              className={styles.modalInput}
              key={inputKey}
              />
          </>
        )}
      </label>
      <textarea
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={handleCaptionChange}
      />
      <button onClick={handleUpload} className="modal-button">upload moment</button>
    </Modal>

  );
}

export default UploadMoment;