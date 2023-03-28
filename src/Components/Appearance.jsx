import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  getThemeTextColor,
  getThemeTextSecondaryColor,
} from "../data/themesData";
import { setFontSize, setThemeMode } from "../app/features/theme/themeSlice";

const Appearance = () => {
  const toastMessage = (message) => toast(message);
  const app = useSelector((state) => state.app);
  const theme = useSelector((state) => state.theme);
  const themeModeRef = useRef(theme.themeMode);
 
  const fontSizeRef = useRef(theme.fontSize);
  
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
    <div className="px-2 py-4 md:px-8">
      <div className="flex flex-col gap-4 md:max-w-[800px] min-h-[90vh] mx-auto">
        <div
          className={`text-3xl font-bold ${getThemeTextColor(theme.themeMode)}`}
        >
          Appearance
        </div>
        <section className="flex flex-col gap-2 my-2">
          <div className="grid gap-4 md:grid-cols-1 md:w-1/2">
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="theme-mode"
                className={`text-sm ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} font-medium`}
              >
                Theme Mode
              </label>

              <select
                ref={themeModeRef}
                className="w-full p-1 border border-gray-300 rounded-md"
                name="theme-mode"
                id="theme-mode"
              >
                <option selected={theme.themeMode === false} value={0}>
                  Light
                </option>
                <option selected={theme.themeMode === true} value={1}>
                  Dark
                </option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label
                htmlFor="theme-mode"
                className={`text-sm ${getThemeTextSecondaryColor(
                  theme.themeMode
                )} font-medium`}
              >
                Font Size
              </label>

              <select
                ref={fontSizeRef}
                className="w-full p-1 border border-gray-300 rounded-md"
                name="font-size"
                id="font-size"
              >
                <option selected={theme.fontSize === 0} value={0}>
                  Extra Small
                </option>
                <option selected={theme.fontSize === 1} value={1}>
                  Small
                </option>
                <option selected={theme.fontSize === 2} value={2}>
                  Medium
                </option>
                <option selected={theme.fontSize === 3} value={3}>
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
              className="px-2 py-1 text-white bg-blue-500 border border-gray-300 rounded-md"
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
