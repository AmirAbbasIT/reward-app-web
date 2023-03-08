import { toast } from "react-toastify";

export const notifySuccess = (massage) => {
  toast.success(`${massage}`, {
    toastId: "custom-toast-success-id",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const notifyError = (massage) => {
  toast.error(`${massage}`, {
    toastId: "custom-toast-error-id",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notifyInfo = (massage) => {
  toast.info(`${massage} !`, {
    toastId: "custom-toast-info-id",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const notifyWarning = (massage) => {
  toast.warn(`${massage} !`, {
    toastId: "custom-toast-warn-id",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
