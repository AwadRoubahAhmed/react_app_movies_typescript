import logo from "./image_logo.jpg";
export default function Logo() {
  return (
    <div>
      <div className="w-auto">
        <img
          src={logo}
          alt=""
          className="w-56 h-20 cursor-pointer my-6 ring-primary ring-offset-base-100 rounded-full ring ring-offset-2"
        />
      </div>
    </div>
  );
}
