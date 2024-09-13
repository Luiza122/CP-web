import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempoxp: "6 meses",
      color: "red"
    },
    {
      titulo: "CSS",
      nivel: "Avançado",
      tempoxp: "6 ano",
      color: "purple"
    },
    {
      titulo: "Node JS",
      nivel: "Basico",
      tempoxp: "4 meses",
      color: "blue",
      imagemIcone: "/assets/curinthia.png"
    },
    {
      titulo: "Python",
      nivel: "Intermediario",
      tempoxp: "6 meses",
      color: "green"
    },
    {
      titulo: "React",
      nivel: "Basico",
      tempoxp: "3 meses",
      color: "cyan"
    },
    {
      titulo: "JavaScript",
      nivel: "Intermediario",
      tempoxp: "5 meses",
      color: "yellow"
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
