export default function Content({ children, height }) {
  // const seconClass = secondClass ? secondClass: "";
  return (
    <div
      className="content dark-theme"
      style={{height: height}}
    >
      {children}
    </div>
  );
}
