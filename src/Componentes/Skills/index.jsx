import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempoxp: "6 meses",
      color: "#615E71"
    },
    {
      titulo: "CSS",
      nivel: "Avançado",
      tempoxp: "6 ano",
      color: "#615E71"
    },
    {
      titulo: "Node JS",
      nivel: "Basico",
      tempoxp: "4 meses",
      color: "#615E71",
    
    },
    {
      titulo: "Python",
      nivel: "Intermediario",
      tempoxp: "6 meses",
      color: "#615E71"
    },
    {
      titulo: "React",
      nivel: "Basico",
      tempoxp: "3 meses",
      color: "#615E71"
    },
    {
      titulo: "JavaScript",
      nivel: "Intermediario",
      tempoxp: "5 meses",
      color: "#615E71"
    },
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades} />
    </div>
  );
}

export default Skills;
