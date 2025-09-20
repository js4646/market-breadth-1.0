import insights from "../../data/buffettInsights.json";
import { useRouter } from "next/router";

export default function InsightDetail() {
  const router = useRouter();
  const { id } = router.query;
  const insight = insights.find((i) => i.id === id);

  if (!insight) return <p>Loading...</p>;

  return (
    <div>
      <h1>{insight.title}</h1>
      <p>{insight.summary}</p>
      <p>
        <strong>Example:</strong> {insight.example}
      </p>
      {/* <img src={insight.graphUrl} alt={insight.title} /> */}
    </div>
  );
}
