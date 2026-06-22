import { type ReactNode, useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Modal({ open, onClose, children, className = '' }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-primary-900/40 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className={`relative w-full sm:max-w-2xl bg-white rounded-t-4xl sm:rounded-4xl shadow-soft-2xl animate-slide-up max-h-[90vh] overflow-y-auto scrollbar-hide ${className}`}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-primary-400 hover:bg-white hover:text-primary-600 transition-colors shadow-soft ring-focus"
          aria-label="Close"
        >
          <X className="w-4.5 h-4.5" />
        </button>
        {children}
      </div>
    </div>
  );
}

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Sheet({ open, onClose, children }: SheetProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-primary-900/30 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-soft-2xl animate-slide-in-right overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
