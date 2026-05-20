import React from "react";

const Modal = ({ isOpen, onClose, data }) => {

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >

      {/* Modal Box */}
      <div
        className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Image */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6">

          <h1 className="text-3xl font-bold text-gray-800">
            {data.title}
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {data.description}
          </p>

        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-white text-3xl font-bold hover:scale-110 transition"
        >
          ✕
        </button>

      </div>
    </div>
  );
};

export default Modal;