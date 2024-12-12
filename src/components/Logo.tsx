import logo from "./image_logo.jpg";
export default function Logo() {
  return (
    <div>
      <div className="w-auto">
        <img src={logo} alt="" className="w-56 h-22 cursor-pointer" />
      </div>
    </div>
  );
}
