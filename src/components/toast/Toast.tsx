import { createPortal } from "react-dom";

interface ToastProps {
  isOpen: boolean;
  text?: string;
}

const Toast = ({ isOpen, text }: ToastProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed bottom-8 flex w-full justify-center">
      <div className="animate-slideUp rounded-lg bg-[#6d6d6d] px-[16px] py-[8px]">
        <div className="text-center font-medium text-white">{text}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Toast;
