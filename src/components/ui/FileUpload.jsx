import React, { useState, useRef } from 'react';

const FileUpload = ({ 
  onFileSelect,
  accept = '*',
  multiple = false,
  maxSize = 5 * 1024 * 1024,
  label = 'Upload File',
  helperText = '',
  disabled = false,
  className = '',
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef(null);
  
  const validateFile = (file) => {
    if (maxSize && file.size > maxSize) {
      return `File size exceeds ${(maxSize / (1024 * 1024)).toFixed(2)}MB`;
    }
    return null;
  };
  
  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList);
    const validFiles = [];
    let errorMsg = '';
    
    for (const file of newFiles) {
      const validation = validateFile(file);
      if (validation) {
        errorMsg = validation;
        break;
      }
      validFiles.push(file);
    }
    
    if (errorMsg) {
      setError(errorMsg);
      return;
    }
    
    setError('');
    setFiles(multiple ? [...files, ...validFiles] : validFiles);
    
    if (onFileSelect) {
      onFileSelect(multiple ? validFiles : validFiles[0]);
    }
  };
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };
  
  const handleButtonClick = () => {
    inputRef.current?.click();
  };
  
  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };
  
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };
  
  return (
    <div className={`${className}`}>
      {label && (
        <label className="block mb-2 text-sm font-semibold font-sans text-brand-dark">
          {label}
        </label>
      )}
      
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
          dragActive
            ? 'border-brand-gold bg-brand-gold bg-opacity-10'
            : error
            ? 'border-red-500 bg-red-50'
            : 'border-brand-silver hover:border-brand-gold'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
        />
        
        <div className="flex flex-col items-center">
          <svg
            className={`w-12 h-12 mb-4 ${dragActive ? 'text-brand-gold' : 'text-brand-silver'}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          
          <p className="mb-2 text-sm font-sans text-brand-dark">
            <span className="font-semibold text-brand-gold">Click to upload</span> or drag and drop
          </p>
          
          {helperText && (
            <p className="text-xs text-brand-silver font-sans">{helperText}</p>
          )}
        </div>
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-500 font-sans">{error}</p>
      )}
      
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-brand-gold bg-opacity-10 border border-brand-gold rounded-lg"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <svg
                  className="w-8 h-8 text-brand-gold flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium font-sans text-brand-dark truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-brand-silver font-sans">
                    {formatFileSize(file.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="flex-shrink-0 ml-2 text-brand-silver hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-full p-1"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
