const GROUPS = [
  { title: "Languages", items: ["Java", "Python", "TypeScript", "JavaScript", "C# / .NET"] },
  { title: "Frameworks", items: ["Spring Boot", "React", "Node.js", "Express", "REST APIs"] },
  { title: "Cloud", items: ["AWS", "Azure", "GCP", "Docker", "Linux"] },
];

export default function Stack() {
  return (
    <div id="stack" className="expertise-toolbox" role="group" aria-labelledby="stack-heading">
      <h3 id="stack-heading" className="toolbox-heading">Tools of the trade.</h3>
      <div className="toolbox-grid">
        {GROUPS.map(group => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
        <div>
          <h4>How I work</h4>
          <p>Pragmatic over precious. I write code other humans can read,
            document the <em>why</em>, and treat production like a place my code actually has to live.</p>
        </div>
      </div>
    </div>
  );
}
