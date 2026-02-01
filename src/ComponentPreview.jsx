import React, { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Modal from './components/Modal/Modal';
import Toast from './components/Toast/Toast';
import FileUpload from './components/FileUpload/FileUpload';

const ComponentPreview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [toasts, setToasts] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  
  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type, duration: 4000, position: 'top-right' }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };
  
  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmailValue(value);
    
    if (value && !value.includes('@')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-gray-900 to-brand-dark">
      {/* Toast Container */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          position={toast.position}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      
      {/* Header */}
      <div className="bg-brand-dark border-b-4 border-brand-gold py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-script text-brand-gold mb-2">Ayman Clothing</h1>
          <p className="text-brand-white font-sans text-sm tracking-widest">COMPONENT LIBRARY</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Brand Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-full h-32 bg-brand-gold rounded-lg shadow-lg mb-3 border-2 border-brand-gold"></div>
              <p className="font-sans text-brand-white font-semibold">Gold</p>
              <p className="font-sans text-brand-silver text-sm">#D99142</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-brand-silver rounded-lg shadow-lg mb-3 border-2 border-brand-silver"></div>
              <p className="font-sans text-brand-white font-semibold">Silver</p>
              <p className="font-sans text-brand-silver text-sm">#A6A6A6</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-brand-dark rounded-lg shadow-lg mb-3 border-2 border-brand-gold"></div>
              <p className="font-sans text-brand-white font-semibold">Dark</p>
              <p className="font-sans text-brand-silver text-sm">#000000</p>
            </div>
            <div className="text-center">
              <div className="w-full h-32 bg-brand-white rounded-lg shadow-lg mb-3 border-2 border-brand-gold"></div>
              <p className="font-sans text-brand-white font-semibold">White</p>
              <p className="font-sans text-brand-silver text-sm">#FFFFFF</p>
            </div>
          </div>
        </section>
        
        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">Buttons</h2>
          <div className="bg-brand-white rounded-lg p-8 shadow-xl">
            <div className="space-y-8">
              {/* Button Variants */}
              <div>
                <h3 className="text-xl font-sans font-semibold text-brand-dark mb-4">Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="dark">Dark</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              
              {/* Button Sizes */}
              <div>
                <h3 className="text-xl font-sans font-semibold text-brand-dark mb-4">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>
              
              {/* Button States */}
              <div>
                <h3 className="text-xl font-sans font-semibold text-brand-dark mb-4">States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Inputs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">Input Fields</h2>
          <div className="bg-brand-white rounded-lg p-8 shadow-xl">
            <div className="space-y-6 max-w-2xl">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="This will be displayed on your profile"
              />
              
              <Input
                label="Email Address"
                type="email"
                placeholder="example@email.com"
                value={emailValue}
                onChange={handleEmailChange}
                error={emailError}
                required
                icon={
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
              />
              
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                helperText="Must be at least 8 characters"
                icon={
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                }
              />
              
              <Input
                label="Disabled Input"
                placeholder="This field is disabled"
                disabled
              />
            </div>
          </div>
        </section>
        
        {/* Modal Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">Modal</h2>
          <div className="bg-brand-white rounded-lg p-8 shadow-xl">
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
            </div>
            
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Sample Modal"
              size="md"
              footer={
                <>
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => {
                    setIsModalOpen(false);
                    addToast('Action confirmed!', 'success');
                  }}>
                    Confirm
                  </Button>
                </>
              }
            >
              <div className="space-y-4">
                <p className="text-brand-dark font-sans">
                  This is a sample modal dialog with the Ayman Clothing brand colors. 
                  Modals are perfect for displaying important information, forms, or confirmations.
                </p>
                <Input
                  label="Sample Input in Modal"
                  placeholder="Type something..."
                  fullWidth
                />
              </div>
            </Modal>
          </div>
        </section>
        
        {/* Toast Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">Toast Notifications</h2>
          <div className="bg-brand-white rounded-lg p-8 shadow-xl">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" onClick={() => addToast('This is a success message!', 'success')}>
                Success Toast
              </Button>
              <Button variant="secondary" onClick={() => addToast('This is an error message!', 'error')}>
                Error Toast
              </Button>
              <Button variant="dark" onClick={() => addToast('This is a warning message!', 'warning')}>
                Warning Toast
              </Button>
              <Button variant="outline" onClick={() => addToast('This is an info message!', 'info')}>
                Info Toast
              </Button>
            </div>
          </div>
        </section>
        
        {/* File Upload Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">File Upload</h2>
          <div className="bg-brand-white rounded-lg p-8 shadow-xl">
            <div className="max-w-2xl">
              <FileUpload
                label="Upload Documents"
                helperText="Supported formats: PDF, DOC, DOCX (Max 5MB)"
                accept=".pdf,.doc,.docx"
                multiple
                onFileSelect={(files) => {
                  console.log('Selected files:', files);
                  addToast(`${Array.isArray(files) ? files.length : 1} file(s) uploaded!`, 'success');
                }}
              />
              
              <div className="mt-8">
                <FileUpload
                  label="Upload Images"
                  helperText="Supported formats: JPG, PNG, GIF (Max 5MB)"
                  accept="image/*"
                  onFileSelect={(file) => {
                    console.log('Selected file:', file);
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-sans font-bold text-brand-gold mb-6">Typography</h2>
          <div className="bg-brand-white rounded-lg p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-sans font-semibold text-brand-silver mb-2">Script Font (Dancing Script)</h3>
                <p className="text-5xl font-script text-brand-gold">Ayman Clothing</p>
              </div>
              
              <div>
                <h3 className="text-sm font-sans font-semibold text-brand-silver mb-2">Sans Serif Font (Montserrat)</h3>
                <div className="space-y-2">
                  <p className="text-4xl font-sans font-bold text-brand-dark">Heading 1</p>
                  <p className="text-3xl font-sans font-bold text-brand-dark">Heading 2</p>
                  <p className="text-2xl font-sans font-semibold text-brand-dark">Heading 3</p>
                  <p className="text-xl font-sans font-medium text-brand-dark">Heading 4</p>
                  <p className="text-base font-sans text-brand-dark">Body Text - Regular</p>
                  <p className="text-sm font-sans text-brand-silver">Small Text - Silver</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <div className="bg-brand-dark border-t-4 border-brand-gold py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-brand-white font-sans text-sm tracking-widest mb-2">MADE IN NIGERIA</p>
          <p className="text-brand-silver font-sans text-xs">© 2026 Ayman Clothing. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ComponentPreview;
