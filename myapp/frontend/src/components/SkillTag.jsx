function SkillTag({ skill, variant = "matched" }) {
  const styles =
    variant === "matched"
      ? "bg-emerald-50 text-emerald-700 border-emerald-200"
      : "bg-red-50 text-red-700 border-red-200";

  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border ${styles} mr-2 mb-2`}>
      {skill}
    </span>
  );
}

export default SkillTag;