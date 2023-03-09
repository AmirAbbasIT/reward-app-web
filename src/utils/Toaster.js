// import { toast } from "react-toastify";
import toastr from "toastr";
export const notifySuccess = (massage) => {
  toastr.success(massage);
};

export const notifyError = (massage) => {
  toastr.error(massage, "", {});
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
