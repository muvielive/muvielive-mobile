import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import Toast, { ToastType } from "./Toast";

interface ToastOptions {
  type?: ToastType;
  title?: string;
  duration?: number;
}

interface ToastContextValue {
  showToast: (
    message: string,
    options?: ToastOptions
  ) => void;

  success: (
    message: string,
    options?: Omit<ToastOptions, "type">
  ) => void;

  error: (
    message: string,
    options?: Omit<ToastOptions, "type">
  ) => void;

  warning: (
    message: string,
    options?: Omit<ToastOptions, "type">
  ) => void;

  info: (
    message: string,
    options?: Omit<ToastOptions, "type">
  ) => void;

  hideToast: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(
  undefined
);

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: ToastType;
    title?: string;
    duration: number;
  }>({
    visible: false,
    message: "",
    type: "info",
    duration: 3000,
  });

  const hideToast = useCallback(() => {
    setToast((current) => ({
      ...current,
      visible: false,
    }));
  }, []);

  const showToast = useCallback(
    (
      message: string,
      options: ToastOptions = {}
    ) => {
      setToast({
        visible: true,
        message,
        type: options.type ?? "info",
        title: options.title,
        duration: options.duration ?? 3000,
      });
    },
    []
  );

  const success = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "type"> = {}
    ) => {
      showToast(message, {
        ...options,
        type: "success",
      });
    },
    [showToast]
  );

  const error = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "type"> = {}
    ) => {
      showToast(message, {
        ...options,
        type: "error",
      });
    },
    [showToast]
  );

  const warning = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "type"> = {}
    ) => {
      showToast(message, {
        ...options,
        type: "warning",
      });
    },
    [showToast]
  );

  const info = useCallback(
    (
      message: string,
      options: Omit<ToastOptions, "type"> = {}
    ) => {
      showToast(message, {
        ...options,
        type: "info",
      });
    },
    [showToast]
  );

  const value = useMemo(
    () => ({
      showToast,
      success,
      error,
      warning,
      info,
      hideToast,
    }),
    [
      showToast,
      success,
      error,
      warning,
      info,
      hideToast,
    ]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <Toast
        visible={toast.visible}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        duration={toast.duration}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider"
    );
  }

  return context;
}