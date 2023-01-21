import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontSize, setThemeMode } from "../app/features/app/appSlice";
import toast, { Toaster } from "react-hot-toast";
import {
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";

const Appearance = () => {
  const toastMessage = (message) => toast(message);
  const app = useSelector((state) => state.app);
  const themeModeRef = useRef(app.themeMode);
  const fontSizeRef = useRef(app.fontSize);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(setThemeMode(themeModeRef.current.value));
    dispatch(setFontSize(fontSizeRef.current.value));
    toastMessage("Saved Successfully");
  };
  useEffect(() => {
    return () => {
      toast.dismiss();
    };
  }, []);

  return (
    <div className="px-2 md:px-8 py-4">
      <div className="flex flex-col gap-4 md:max-w-[800px] min-h-[90vh] mx-auto">
        <div
          className={`text-3xl font-bold ${getThemeTextColor(app.themeMode)}`}
        >
          Appearance
        </div>
        <section className="flex flex-col gap-2 my-2">
          <div className="grid md:grid-cols-1 md:w-1/2 gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="theme-mode"
                className={`text-sm ${getThemeTextSecondaryColor(
                  app.themeMode
                )} font-medium`}
              >
                Theme Mode
              </label>

              <select
                ref={themeModeRef}
                className="w-full p-1 rounded-md border border-gray-300"
                name="theme-mode"
                id="theme-mode"
              >
                <option selected={app.themeMode === 0} value={0}>
                  Light
                </option>
                <option selected={app.themeMode === 1} value={1}>
                  Dark
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="theme-mode"
                className={`text-sm ${getThemeTextSecondaryColor(
                  app.themeMode
                )} font-medium`}
              >
                Font Size
              </label>

              <select
                ref={fontSizeRef}
                className="w-full p-1 rounded-md border border-gray-300"
                name="font-size"
                id="font-size"
              >
                <option selected={app.fontSize === 0} value={0}>
                  Extra Small
                </option>
                <option selected={app.fontSize === 1} value={1}>
                  Small
                </option>
                <option selected={app.fontSize === 2} value={2}>
                  Medium
                </option>
                <option selected={app.fontSize === 3} value={3}>
                  Large
                </option>
              </select>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-2 my-2">
          <div className="flex justify-end gap-6">
            <button
              onClick={handleSave}
              className="py-1 px-2 rounded-md border border-gray-300 bg-blue-500 text-white"
            >
              Save
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Appearance;
