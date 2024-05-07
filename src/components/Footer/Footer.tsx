import { useTheme } from "../../hooks/useTheme";

function Footer() {
  const { toggle } = useTheme();
  return (
    <footer className="bg-slate-700 md:bg-blue-900 p-5 text-white text-base font-extralight text-center">
    <button onClick={() => toggle()}></button>
      Copyright © 2024 Max Stepantsev, All Rights Reserved.
    </footer>
  );
}

export default Footer;
