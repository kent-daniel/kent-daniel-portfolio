import React from "react";
import Modal from "../Modal";
import Image from "next/image";

type Props = {
  title: string;
  images?: string[];
  description: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const ProjectDetailsModal = ({
  title,
  images,
  description,
  isOpen,
  setIsOpen,
}: Props) => {
  return (
    <Modal title={title} isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex items-center my-3">
        {images && images.length > 0 && (
          <div className="w-3/4 pr-4 overflow-hidden">
            <Image
              src={images[0]}
              alt="Main Image"
              className="w-full h-auto rounded-lg border"
            />
          </div>
        )}
        <div className="w-1/2 flex pl-4 mb-4 overflow-y-hidden flex-wrap justify-end">
          {images &&
            images.slice(1).map((imageUrl, index) => (
              <div key={index} className="">
                <Image
                  src={imageUrl}
                  alt={`Image ${index + 2}`}
                  className="rounded-lg overflow-hidden mx-2 border my-1 "
                  style={{ maxHeight: "300px", width: "auto" }}
                />
              </div>
            ))}
        </div>
      </div>
      <div>{description}</div>
    </Modal>
  );
};

export default ProjectDetailsModal;
