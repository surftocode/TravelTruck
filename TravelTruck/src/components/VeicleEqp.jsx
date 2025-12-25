

export default function VeicleEqp() {
  const icons = import.meta.glob("../../assets/icons/*.svg", {
    eager: true,
    import: "default",
  });
  const getIcon = (iconName) => {
    return icons[`../../assets/icons/${iconName}.svg`];
  };

  return (
    <ul>
      {Object.entries(icons).map(([path, IconComponent]) => {
        const iconName = path.split("/").pop().replace(".svg", "");
        return (
          <li key={iconName} style={{ width: "32px", height: "32px" }}>
            <IconComponent />
            <span>{iconName}</span>
          </li>
        );
      })}
    </ul>
  );
}
